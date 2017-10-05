import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'more-stills',
    templateUrl: 'more-stills.component.html',
    styleUrls: ['more-stills.component.scss']
})

export class MoreStillsComponent implements OnInit {
    constructor(private route: ActivatedRoute,) {
    }

    public ngOnInit(): void {
        this.route.data.subscribe((data) => {
            console.log(data);
        });
    }
}