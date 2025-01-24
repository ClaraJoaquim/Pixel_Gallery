import { Component, Input, OnInit } from '@angular/core';
import { UsuarioDTO } from '../../usuario.dto';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  dados: UsuarioDTO[] = [];

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (item: UsuarioDTO[]) => {
        this.dados = item;
    });
  }
}
