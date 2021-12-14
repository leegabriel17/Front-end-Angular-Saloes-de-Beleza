import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  incorreto: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit(){
    this.authService.submit(this.usuario)
    this.incorreto = this.authService.offline
  }

  alternativo(){
    alert('Desculpe, essa opção ainda não está disponível.')
  }

}
