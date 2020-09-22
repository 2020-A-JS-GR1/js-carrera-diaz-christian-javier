import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService{
  isAuthenticate = false;
  url = 'http://localhost:1337';
  role = [
    'admin',
    'super'
  ]

  constructor(
    private readonly _httpClient: HttpClient,
  ) {

  }
  login(correo:string, cedula:string){
    return this._httpClient.get(
      this.url + '/Usuario?correo='+correo+'&cedula='+cedula
    );
  }

}
