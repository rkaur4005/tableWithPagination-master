import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-mts2',
  templateUrl: './mts2.component.html',
  styleUrls: ['./mts2.component.css']
})
export class Mts2Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

    
 ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }
}
