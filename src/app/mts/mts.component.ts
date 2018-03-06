import { Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator, MdCheckboxModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { CacheService } from 'ng2-cache-service';
import { storage } from '../common/service/storage.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { UserService } from '../common/service/user.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-mts',
  templateUrl: './mts.component.html',
  styleUrls: ['./mts.component.css']
})
export class MtsComponent {

  displayedColumns = ['gender', 'statusColor', 'status', 'id', 'login', 'userName', 'nat'];
  source = this.userService.get();
  exampleDatabase = new ExampleDatabase(this.source, this.store);

  dataSource;
  eventCtrl: FormControl;
  filteredEvents: any;
  filter;

  filterData;

  filterQuery = {
    event : '',
    system : '',
    office : '',
    status : []
  }


  callMe(row) {
    console.log(row);
  }

  ngOnInit() {
    this.checked = this.store.get('mtsData') || [];
    this.selectedItems = this.store.get('selectedItems') || [];
    this.dataSource = new ExampleDataSource(
        this.exampleDatabase, 
        this.paginator, 
        this.filter
      );
    
      this.filterData = this.exampleDatabase.filterData;
    
  }


  
  checked = [];
  selectedItems = [];
  constructor(
    private store: storage,
    private userService: UserService,
    public dialog: MdDialog,
    private router: Router) {

    this.eventCtrl = new FormControl();
    
  }

  @ViewChild(MdPaginator) paginator: MdPaginator;

  statusColor(s) {
    var status = [];
    status['In Progress'] = 'orange';
    status['Completed'] = 'green';
    status['Failed'] = 'red';
    status['Saved'] = 'purple';
    status['Aborted'] = 'black';
    return status[s];
  }

  onFilter(nat) {
    
    this.source = this.userService.search(nat);
    this.exampleDatabase = new ExampleDatabase(this.source, this.store);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase, 
      this.paginator, 
      this.filter
    );


    // this.filter = nat;
    // this.source = (nat) ? this.userService.filter(nat) : this.userService.get();
    // this.exampleDatabase = new ExampleDatabase(this.source, this.store);
    // this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.filter);
  }

  



  change(elm, row) {
    this.store.set('mtsData', this.checked);

    if (elm.checked) {
      this.selectedItems[this.selectedItems.length] = row;
    } else {
      this.selectedItems = this.selectedItems.filter(e => (JSON.stringify(row) == JSON.stringify(e)) ? false : true)
    }
    this.store.set('selectedItems', this.selectedItems);

  }

  onAbort() {
    
    this.userService.abort(this.selectedItems);
    this.store.flush();
    this.checked.forEach((a, b) => this.checked[b] = false);
  }

  onDelete(){
    //Todo: Change phone to ID
    var IDs = this.selectedItems.map(i => i.phone);
    this.userService.delete(IDs).then(res => {
      console.log(res);
    });
  }


  onSave() {
    this.userService.save(this.selectedItems).subscribe(e => {
      console.log(e);
      alert('Data Saved!!');
    }, e => console.log(e));
  }
  onRefresh() {
    console.log('Refreshing..');
  }
  onGroup() {
    console.log('Grouping..');
  }
  reprocess() {
    console.log('Reprocessing..');

  }



}




/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): any[] { return this.dataChange.value; }
  
  filterData = {
    event: [],
    system : [],
    office : []
  };
  

  status = ['In Progress', 'Completed', 'Failed', 'Saved', 'Aborted'];
  statusColor = [];

  constructor(private userService, private store: storage) {
    this.statusColor['In Progress'] = 'orange';
    this.statusColor['Completed'] = 'green';
    this.statusColor['Failed'] = 'red';
    this.statusColor['Saved'] = 'purple';
    this.statusColor['Aborted'] = 'black';

    const copiedData = this.data.slice();

    this.userService.subscribe(e => {
      
      e = e.map(f => {

        this.filterData.event.push(f.login.username);
        this.filterData.system.push(f.name.first);
        this.filterData.office.push(f.name.last);  


        var i = Math.floor(Math.random() * 5) + 0;
        f['status'] = this.status[i];
        f['statusColor'] = this.statusColor[this.status[i]];

        return f;
      })
      copiedData.push(...e);
      this.dataChange.next(copiedData);
    });

    

  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private db: ExampleDatabase,
    private _paginator: MdPaginator,
    private filter
  ) {
    super();
    
  }


  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.db.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.db.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}

