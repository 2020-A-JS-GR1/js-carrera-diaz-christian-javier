import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  correoModelo:string;
  cedulaModelo:string;
  constructor(
    public readonly _autService: AuthService

  ) { }

  ngOnInit(): void {
  }

  revisarLogin(loginForm){
    const obsLogin= this._autService.login(
      this.correoModelo, this.cedulaModelo
    );

    obsLogin.
      subscribe(
      (userArray:any[])=>{
        if(userArray.length > 0){
          this._autService.isAuthenticate=true;
        }else{
          this._autService.isAuthenticate=false;
        }
      },
      (error)=>{
        console.error('Error', error);
      }
    );
  }

}
