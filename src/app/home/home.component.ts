import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { UsersService } from '../services/usersService';
import { XLarge } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  date;
  users;
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, public usersService: UsersService) {
    setInterval(() => this.date = new Date(), 1000);
    usersService.get()
        .subscribe(
            data => this.users = data,
            err => console.log(err),
            () => console.log('Complete')
        );
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
