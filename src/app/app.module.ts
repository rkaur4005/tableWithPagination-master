import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {storage} from './common/service/storage.service';
import {UserService} from './common/service/user.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { MtsComponent } from './mts/mts.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FilterComponent } from './mts/filter/filter.component';
import { CdkTableModule } from '@angular/cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheService } from 'ng2-cache-service';
import { Mts2Component } from './mts2/mts2.component';


@NgModule({
  declarations: [
    AppComponent,
    MtsComponent,
    HeaderComponent,
    SidebarComponent,
    FilterComponent,
    Mts2Component
  ],
  imports: [
    RouterModule.forRoot([
      {path : '', component : MtsComponent},
      {path : 'mts2', component : Mts2Component},
      {path : '**', redirectTo : ''}
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,

    //Material Components
    MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
    // MaterialModule
  ],
  providers: [CacheService, storage, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
