import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable, Observer, from } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  private load(): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      const scriptElement = this.document.createElement('script');
      scriptElement.src = 'https://apis.google.com/js/api.js';
      scriptElement.type = 'text/javascript';
      scriptElement.charset = 'utf-8';
      this.document.getElementsByTagName('head')[0].appendChild(scriptElement);
      scriptElement.onload = () => {
        observer.next(true);
        observer.complete();
      };
    });
  }

  public initClient() {
    return this.load()
      .pipe(
        switchMap((result: boolean) =>
          Observable.create((observer: Observer<any>) => {
            gapi.load('client:auth2', () => {
              observer.next(true);
              observer.complete();
            });
          })
        ),
        switchMap((result: boolean) => {
          return from(
            gapi.client.init({
              apiKey: 'AIzaSyASfQ5SmnFx02mRa6cjFBbIuATXHWqSoKw',
              clientId: '198090970443-8pt4rmdd0b91l5ap5c8qgseeci6jpff1.apps.googleusercontent.com',
              discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'],
              scope: 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/tasks.readonly'
            })
          );
        }),
        take(1)
      );
  }
}
