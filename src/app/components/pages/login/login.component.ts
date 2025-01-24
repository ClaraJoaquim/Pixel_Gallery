import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioDTO } from '../../usuario.dto';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apertouLogin: boolean = false;
  formLogin!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastyService: ToastyService,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required]],
      senha: ["", [Validators.required]],
    });
  }

  login() {

    if(this.formLogin.invalid) {
      this.apertouLogin = true;
      this.toastyService.error("Login não realizado. Verifique os dados")
      return
    }

    const email = this.formLogin.get("email").value;

    this.usuarioService.login(email).subscribe(
      (usuarioDTO: UsuarioDTO) => {
        const dataAtual = new Date()
        usuarioDTO.criado_em = dataAtual.toLocaleDateString('pt-BR');
        localStorage.setItem("usuario", JSON.stringify(usuarioDTO));
        next: 
        this.toastyService.success("Login Realizado com Sucesso");
        setTimeout (() => {
          this.router.navigate(['/perfil'], {queryParams: { usuarioId: usuarioDTO.id }}).then(() => {
            window.location.reload();
          });
        });
      },
      (error) => {
        this.toastyService.warning("Login não realizado. Verifique os dados digitados");
      }
    );
  }

  get email () {
    return this.formLogin.get("email");
  }

  get senha () {
    return this.formLogin.get("senha");
  }

}
