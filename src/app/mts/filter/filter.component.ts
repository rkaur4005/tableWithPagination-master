import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterList;
  nat;
  @Input() data;
  @Input() options;

  @Output() filter: EventEmitter<any> = new EventEmitter();
  eventCtrl: FormControl;
  systemCtrl: FormControl;
  officeCtrl: FormControl;

  filteredEvents: any = [];
  filteredSystems: any = [];
  filteredOffices: any = [];



  constructor() {

    this.eventCtrl = new FormControl();
    this.systemCtrl = new FormControl();
    this.officeCtrl = new FormControl();


    this.filterList = [
      { name: 'In Progress', value: 'In Progress' },
      { name: 'Completed', value: 'Completed' },
      { name: 'Failed', value: 'Failed' },
      { name: 'Saved', value: 'Saved' },
      { name: 'Aborted', value: 'Aborted' },
    ]

  }

  ngOnInit() {

    this.filteredEvents = this.eventCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterLists(name, this.data.event));

    this.filteredSystems = this.systemCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterLists(name, this.data.system));

    this.filteredOffices = this.officeCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterLists(name, this.data.office));


  }

  changeEvent(value) {
    this.options.event = value;
    this.filter.emit(this.options);
  }
  changeSystem(value) {
    this.options.system = value;
    this.filter.emit(this.options);
  }
  changeOffice(value) {
    this.options.office = value;
    this.filter.emit(this.options);
  }
  
  
  filterLists(val, list) {
    return val ? list.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : list;
  }


  onNatChange(e) {
    (this.options['status'].indexOf(e.source.value) == -1 ) 
    ? this.options['status'].push(e.source.value)
    : this.options['status'].splice(this.options['status'].indexOf(e.source.value), 1);
    this.filter.emit(this.options);
  }

}
