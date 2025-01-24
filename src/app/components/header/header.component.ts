import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../usuario.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfil: boolean = false;
  id: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkIfProfileRoute();
    });
  }

  checkIfProfileRoute(): boolean {
    (usuarioDTO: UsuarioDTO) => {
      this.id = usuarioDTO.id;
    };

    const baseUrl = '/perfil';
    const rotaBase = this.router.url;

    return this.perfil = rotaBase.startsWith(baseUrl);
  }
}
