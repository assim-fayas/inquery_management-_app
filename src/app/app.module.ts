import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEnquiryComponent } from './pages/new-enquiry/new-enquiry.component';
import { EnquiryListComponent } from './pages/enquiry-list/enquiry-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './pages/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEnquiryComponent,
    EnquiryListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
