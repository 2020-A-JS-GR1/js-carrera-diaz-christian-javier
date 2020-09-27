import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ComputerService{
  url= 'http://localhost:1337/'

  constructor(
    private readonly _httpclient: HttpClient
  ) {
  }

  deleteSomeComputers(computers):boolean{
    try {
      for (let computer of computers){
        this._httpclient.delete(this.url+'computer/'+computer.id);
      }
      return true;
    }catch (error){
      console.error('Error en Eliminar Las Computadoras: ',error);
      return false;
    }
  }
  getAllComputers(){
    return this._httpclient.get(this.url+'computer');
  }
  getComputerByID(computer_id:number){
    return this._httpclient.get(this.url+'computer/'+computer_id);
  }
  newComputer(computer){
    return this._httpclient.post(this.url+'computer',computer);
  }
  deleteComputer(computer_id:number){
    return this._httpclient.delete(this.url+'computer/'+computer_id);
  }
  updateComputer(computer, id:number){
    return this._httpclient.put(this.url+ "computer/"+ id, computer);
  }

}
