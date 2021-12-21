import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoListagemComponent } from './atendimento-listagem/atendimento-listagem.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonsModule, DropdownModule, TableModule, TooltipModule } from 'angular-bootstrap-md';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AtendimentoListagemComponent
  ],

  imports: [
    CommonModule,
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
    AtendimentoListagemComponent
  ]
})
export class AtendimentoModule { }
