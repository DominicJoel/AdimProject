import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_pluggins();//Pero tambien tenemos que definirla aqui

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router :Router  ) { }

  ngOnInit() {
    init_pluggins();//Ese init_Pluggins lo pusimos en assets/js/custom.js para que angular lo reconozca

  }

  ingresar(){
      this.router.navigate(["/dashboard"]);
  }
}
