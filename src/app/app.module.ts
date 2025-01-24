import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputMaskModule} from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaPrincipalComponent } from './components/pages/pagina-principal/pagina-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { ToastyModule } from 'ng2-toasty';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HeaderComponent,
    PaginaPrincipalComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    SobreComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    DialogModule,
    TooltipModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    InputMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
