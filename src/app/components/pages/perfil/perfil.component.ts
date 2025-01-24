import { Component, OnInit, Input, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioDTO } from '../../usuario.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  dados: UsuarioDTO;
  btnAlterar: boolean = false;
  esconderBtn: boolean = true;
  cadastroForm: FormGroup;
  genero: string;
  displayExcluir: boolean = false;
  displayAlterar: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private toastyService: ToastyService,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit(): void {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.dados = JSON.parse(usuario);
      this.cadastroForm = this.formBuilder.group({
        id: this.dados.id,
        nome: [this.dados.nome],
        telefone: [this.dados.telefone],
        email: [this.dados.login],
        senha: [this.dados.senha],
        genero: [this.dados.genero],
        criado_em: '',
      });
    }
    this.genero = this.dados.genero;
  }

  mostrarDados() {
    this.btnAlterar = true;
    this.esconderBtn = false;
  }

  async alterarDados () {
    const id = this.dados.id;

    const dadosAtualizados = {
      id: id,
      nome: this.cadastroForm.get('nome').value,
      telefone: this.cadastroForm.get('telefone').value,
      login: this.cadastroForm.get('email').value,
      senha: this.cadastroForm.get('senha').value,
      genero: this.cadastroForm.get('genero').value,
      criado_em: (usuarioDTO: UsuarioDTO) => {
        const dataAtual = new Date()
        usuarioDTO.criado_em = dataAtual.toLocaleDateString('pt-BR');
        localStorage.setItem("usuario", JSON.stringify(usuarioDTO));
        return usuarioDTO.criado_em
      }
    };

    localStorage.setItem('usuario', JSON.stringify(dadosAtualizados));
  
    await this.usuarioService.alterarUsuario(id, dadosAtualizados).subscribe();
    this.toastyService.success("Dados alterados com sucesso!")
    setTimeout(() => {
        window.location.reload();
    }, 1500);
  }

  excluirUsuario(id: number) {
    this.usuarioService.excluirUsuario(id).subscribe();
    this.toastyService.success("Usuário excluído com sucesso!")
    this.router.navigate(['/'])
  }

  showExcluir() {
      this.displayExcluir = true;
  }

  showAlterar() {
    this.displayAlterar = true;
  }
  
}