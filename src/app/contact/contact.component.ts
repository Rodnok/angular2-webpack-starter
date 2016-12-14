import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    template: `<h3>Contact page</h3>`
})


export class ContactComponent {
    ngOnInit() {
        console.log('hello `Contact` component');
    }

    constructor(){}
}