import { Component } from '@angular/core';
import { Static } from './shared/utils/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // intialized variables
  title = Static.title;
  message:string = Static.message;
}
