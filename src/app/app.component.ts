import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toogleNav(nav: any) {
    if (nav.opened) {
      nav.close()
    } else {
      nav.open();
    }
  }
}