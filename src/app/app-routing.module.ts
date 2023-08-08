import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './log/login/login.component';
import { RegistrarUsuarioComponent } from './log/registrar-usuario/registrar-usuario.component';
import { VerificarUsuarioComponent } from './log/verificar-usuario/verificar-usuario.component';
import { HomeComponent } from './home/home.component';
import { RecuperarPasswordComponent } from './log/recuperar-password/recuperar-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  {path: 'recuperar-contraseña', component: RecuperarPasswordComponent},
  {path: 'verificar-correo', component: VerificarUsuarioComponent },
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
