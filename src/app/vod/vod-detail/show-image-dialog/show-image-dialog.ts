import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'show-more-dialog',
    templateUrl: 'show-more-dialog.html'
})

export class ShowImageDialogComponent implements OnInit {
    constructor(@Inject(MD_DIALOG_DATA) public data: any) {
         console.log(data);
    }

    public ngOnInit(): void {
    }
}