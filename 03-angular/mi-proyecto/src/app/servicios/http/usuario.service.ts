//usuario.service.ts

import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService{
  url = 'http://localhost:1337'
  // Constructores en angular sirven para
  // Inyección de dependencias

  constructor(
    private readonly _httpClient:HttpClient //Servicio
  ) {
  }
  traerTodo(){
    return this._httpClient.get(this.url+'/Usuario');
  }

  //Obtener por ID

  ObtenerUnoPorId(idUsuario:number){
    return this._httpClient.get(
      this.url+'/Usuario/'+ idUsuario
    );
  }
  //POST /Usuario
  crear(user){
    return this._httpClient.post(
      this.url + '/Usuario', //URL
      user
    );
  }
  //Eliminar usuario

  eliminar(id:number){
    return this._httpClient.delete(
      this.url+'/Usuario/'+id
    );
  }

  editar(usuario,id){
    return this._httpClient.put(
      this.url + '/Usuario/' + id,//Url
      usuario
    );
  }

}
