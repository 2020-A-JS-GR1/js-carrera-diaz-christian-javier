import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";

const routes: Routes = [
  {
    component: RutaInicioComponent, //Component
    path: 'home' //URL
  },
  {
    component: RutaLoginComponent, //Component
    path: 'login' //URL
  },
  {
    component: RutaUsuarioComponent, //Component
    path: 'user',//URL
    children:[
      {
        path: 'list',
        component: RutaListaUsuarioComponent

      },
      {
        path: 'create',
        component: RutaCrearUsuarioComponent

      },
      {
        path: 'edit/:id',
        component: RutaEditarUsuarioComponent

      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
