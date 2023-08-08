import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { VerificarUsuarioComponent } from './verificar-usuario/verificar-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    RecuperarPasswordComponent,
    RegistrarUsuarioComponent,
    VerificarUsuarioComponent    
  ],
  exports: [
    LoginComponent,
    RecuperarPasswordComponent,
    RegistrarUsuarioComponent,
    VerificarUsuarioComponent 
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
