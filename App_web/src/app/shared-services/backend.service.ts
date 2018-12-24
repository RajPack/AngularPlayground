import { Injectable } from '@angular/core';
import { SharedServicesModule } from './shared-services.module';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: SharedServicesModule
})
export class BackendService {

  constructor(private http: HttpClient) { }
  get(params?: { url: string }) {
    return this.http.get(params.url);
  }
}
