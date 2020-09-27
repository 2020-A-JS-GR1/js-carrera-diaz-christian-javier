import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";

@Injectable()

export class UserService{
  url = 'http://localhost:1337/'

  constructor(
    private readonly _httpclient: HttpClient
  ) {
  }

  deleteSomeUser(users):boolean{
    try {
      for (let user of users){
        this._httpclient.delete(this.url+'user/'+user.id);
      }
      return true;
    }catch (error){
      console.error('Error en Eliminar Los Usuarios: ',error);
      return false;
    }
  }
  deleteSomeUser2(users){
    for (let user of users)
      this.deleteUser(user.id);
  }
  getEveryThing(){
    return this._httpclient.get(this.url+'user');
  }

  getUserByID(user_id:number){
    return this._httpclient.get(this.url+'user/'+user_id);
  }

  newUser(user){
    return this._httpclient.post(this.url+'user',
        user);
  }

  deleteUser(user_id:number){
    return this._httpclient.delete(this.url+'user/'+user_id);
  }

  updateUser(user, id:number){
    return this._httpclient.put(this.url+'user/'+id, user);
  }

}
