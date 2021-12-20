import { CclienteComponent } from './ccliente/ccliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GclienteComponent } from './gcliente/gcliente.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, DropdownModule, TableModule, TooltipModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    GclienteComponent,
    CclienteComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ButtonsModule,
    TooltipModule,
    DropdownModule,
    SharedModule,
    RouterModule,


  ],
  exports: [
    GclienteComponent,
    CclienteComponent
  ]
})
export class GclienteModule { }