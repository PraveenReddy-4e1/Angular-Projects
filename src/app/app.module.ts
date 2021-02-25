import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddDetailsComponent } from './main//add-details/add-details.component';
import { ListDetailsComponent } from './main/list-details/list-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    ListDetailsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
    
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
