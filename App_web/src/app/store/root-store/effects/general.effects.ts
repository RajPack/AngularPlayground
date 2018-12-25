import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GeneralActionTypes } from '../actions/general.actions';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { BackendService } from 'src/app/shared-services/backend.service';

@Injectable()
export class GeneralEffects {
  @Effect({dispatch: false})
  setTitle$: Observable<any> = this.actions$.pipe(
    ofType(GeneralActionTypes.SetTitle),
    switchMap((action: any) => {
      console.log('intercepting action: ' + action.type);
      return this.backend.post({
        url: '/api/setTitle',
        data: { val: action.payload }
      });
    })
  );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
