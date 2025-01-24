import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/components/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioForm } from '../../usuario.form';
import { ToastyService } from 'ng2-toasty';
import { UsuarioDTO } from '../../usuario.dto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuarioData: Usuario;
  cadastrou: boolean = false;
  dados: UsuarioDTO;
  cadastroForm!: FormGroup;
  data: string;

  constructor(
    private usuarioService:UsuarioService,
    private router: Router,
    private toastyService: ToastyService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group ({
      nome:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      senha:['', [Validators.required]],
      telefone:['', [Validators.required]],
      genero:['', [Validators.required]],
    });
  };

  async cadastrar() {

    if(this.cadastroForm.invalid) {
      this.cadastrou = true;
      this.toastyService.error("Cadastro não realizado. Verifique os dados");
      return
    }

    const usuarioForm: Usuario = new UsuarioForm();
    usuarioForm.nome = this.cadastroForm.get("nome").value;
    usuarioForm.telefone = this.cadastroForm.get("telefone").value;
    usuarioForm.login = this.cadastroForm.get("email").value;
    usuarioForm.senha = this.cadastroForm.get("senha").value;
    usuarioForm.genero = this.cadastroForm.get("genero").value;

    await this.usuarioService.cadastrar(usuarioForm).subscribe(() => {
        this.toastyService.success("Cadastro Realizado com Sucesso");
        this.router.navigate([`/login`]);
    });
  }

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get telefone() {
    return this.cadastroForm.get('telefone');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  get genero() {
    return this.cadastroForm.get('genero');
  }
}