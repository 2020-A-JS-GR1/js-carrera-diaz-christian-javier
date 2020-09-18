import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;
  constructor(//Inyectamos dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const obsRoute = this._activatedRoute.params;
    obsRoute
      .subscribe(
        (parameters)=>{
          const id = Number(parameters.id);
          const obsUsuario = this._usuarioService
            .ObtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario:any)=>{
                this.usuario = usuario;
              },
              (error)=>{
                console.log('Error', error);
              }
            );
        }
      );
  }

}
