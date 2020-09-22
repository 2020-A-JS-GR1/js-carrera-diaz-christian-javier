import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  @Input()
  nombreInput:string;
  @Input()
  cedulaInput: string;
  @Input()
  correoInput:string;
  @Input()
  estadoCivilInput:string;

  @Output()
  informacionValidada : EventEmitter<any> = new EventEmitter<any>();
  usuario = {
    nombreModelo:"",
    cedulaModelo:"",
    correoModelo:"",
    estadoCivilModelo:""
  };
  constructor() { }

  ngOnInit(): void {
    if (this.nombreInput && this.cedulaInput && this.correoInput && this.estadoCivilInput)
    {
      this.usuario.cedulaModelo = this.cedulaInput;
      this.usuario.nombreModelo = this.nombreInput;
      this.usuario.correoModelo = this.correoInput;
      this.usuario.estadoCivilModelo = this.estadoCivilInput;
    }
  }
  ayuda(){
    alert('Que necesitas???');
  }
  crearUsuario(formulario){
    const cedula = this.usuario.cedulaModelo;
    const isNumber = !Number.isNaN(Number(cedula));
    if (isNumber){
      // Llamar al servidor
      this.informacionValidada.emit({
        nombre: this.usuario.nombreModelo,
        cedula: this.usuario.cedulaModelo,
        correo: this.usuario.correoModelo,
        estadoCivil: this.usuario.estadoCivilModelo,
      });
    }else {
      console.error("No es un numero");
    }
  }

}
