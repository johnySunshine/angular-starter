import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'no-content',
    template: `
        <div>
            <h1>404: page missing</h1>
        </div>
    `
})
export class NoContentComponent implements OnInit {

    public ngOnInit(): void {
        document.documentElement.scrollTop = 0;
    }

}
