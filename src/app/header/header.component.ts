import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarLogin: boolean = false;

  esconderLogin: boolean = true;

  logoff(){
    alert("Saindo...");
    this.esconderLogin = true;
    this.mostrarLogin = false;
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.mostrarLogin, this.esconderLogin)
    this.authService.mostrarLoginEmitter.subscribe(
      mostrar => this.mostrarLogin = mostrar
    );
    this.authService.esconderLoginEmitter.subscribe(
      esconder => this.esconderLogin = esconder
    )
  }

}
