import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import {TableModule} from 'primeng/table';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';




@NgModule({
  declarations: [
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    SobreComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    ConfirmationService,
    TableModule
  ],
})
export class PrimengModule { }
