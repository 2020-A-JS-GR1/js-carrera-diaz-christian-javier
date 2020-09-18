import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  usersArray
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsTraerTdos = this._usuarioService.traerTodo();
    obsTraerTdos
      .subscribe(
        (users:any[])=>{
          this.usersArray = users;
        },
        (error)=>{
          console.log('Error', error);
        }
      );

  }
  irAEditarUsuario(id:number){
    const route = ['/user', 'edit', id];
    // //usuario/editar/id
    this._router.navigate(route);
  }

  eliminarUsuario(id:number){
   const obsEliminar = this._usuarioService
     .eliminar(id);
   obsEliminar
     .subscribe(
       ()=>{
         // borrando de la interfaz
         const indice = this.usersArray
           .findIndex(u => u.id === id);
         this.usersArray.splice(indice,1);

       },
       (error)=>{
         console.log('Error', error);
       }
     );
  }

}
