import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   //private LOGO = require("./assets/gc_logo.png");
  
  @Input() sidenav;

  constructor() {

   }

  ngOnInit() {
  }

}
