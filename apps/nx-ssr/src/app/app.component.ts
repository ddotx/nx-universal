import { Component } from '@angular/core';

@Component({
  selector: 'nx-universal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nx-ssr';

  openLink() {
    window.open('https://google.com', '_blank')
  }
}
