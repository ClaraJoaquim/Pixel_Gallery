import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { PaginaPrincipalComponent } from './components/pages/pagina-principal/pagina-principal.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'usuarios', component: UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
