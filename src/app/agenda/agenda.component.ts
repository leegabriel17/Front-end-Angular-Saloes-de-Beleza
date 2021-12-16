import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Horario } from './agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  private agenda: Horario = new Horario()
  
  logado: boolean = false;
  deslogado: boolean = false;

  verificar(){
    this.deslogado = this.authService.offline;
    if(this.authService.online == true){      
      this.route.navigate(['agenda/confirmar'])
    }
  }


  constructor(
    private route: Router,
    private authService: AuthService) { }

  ngOnInit() {    
    console.log(`Está logado? ${this.logado}`)
    console.log(`Está deslogado? ${this.deslogado}`)
    this.authService.mostrarLoginEmitter.subscribe(
      mostrar => this.logado = mostrar
    );
    console.log(`Está logado? ${this.logado}`)
    this.authService.esconderLoginEmitter.subscribe(
      esconder => this.deslogado = esconder
    )
  }

}
