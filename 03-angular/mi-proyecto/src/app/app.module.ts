import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/http/usuario.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';

@NgModule({
  declarations: [//Components
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent
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
