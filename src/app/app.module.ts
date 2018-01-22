import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


 
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    ReactiveFormsModule    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
