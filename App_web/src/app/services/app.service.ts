import { Injectable } from '@angular/core';
import { BackendService } from '../shared-services/backend.service';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store/root-store/reducers';
import { SetTitle } from '../store/root-store/actions/general.actions';
import { getTitle } from '../store/root-store/general.selector';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private backend: BackendService, private store: Store<RootState>) { }
  sayHi() {
    console.log('hi');
  }
  fetchTitle() {
    let appInfo$ = this.backend.get({
      url: '/api/appInfo'
    });
    appInfo$.subscribe((data: any) => {
      this.store.dispatch(new SetTitle(data.title));
    });
    return this.store.pipe(select(getTitle, (data) => {
      console.log(data);
    }));
  }

  setTitle(title: string) {
    this.store.dispatch(new SetTitle(title));
  }
}
