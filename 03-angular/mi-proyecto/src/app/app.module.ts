import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/http/usuario.service";

@NgModule({
  declarations: [//Components
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [ //Modules
    BrowserModule, // Importa las directivas
    AppRoutingModule,
    HttpClientModule //Importa el http client
  ],
  providers: [
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
