import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazer-login',
  templateUrl: './fazer-login.component.html',
  styleUrls: ['./fazer-login.component.css']
})
export class FazerLoginComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {
  }

}
