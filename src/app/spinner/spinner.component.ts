import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderState } from './model/loaderState';
import { SpinnerService } from './spinner.service';
import { fadeInSpinner } from './spinner.animated';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [fadeInSpinner]
})

export class SpinnerComponent implements OnInit, OnDestroy {

    public show: boolean = false;

    private subscription: Subscription;

    constructor(private loaderService: SpinnerService) {
    }

    public ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }

    public ngOnDestroy(): void {
    }
}