import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoaderState } from './model/loaderState';

@Injectable()
export class SpinnerService {
    public loaderSubject = new Subject<LoaderState>();
    public loaderState = this.loaderSubject.asObservable();

    public showSpinner(): void {
        this.loaderSubject.next(<LoaderState> {show: true});
    }

    public hideSpinner(): void {
        this.loaderSubject.next(<LoaderState> {show: false});
    }
}
