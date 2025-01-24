import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../components/Usuario';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../components/usuario.dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public baseApiUrl = "http://localhost:8080/usuario";

  constructor(
    private http:HttpClient
  ) { }

  public cadastrar(usuario: Usuario): Observable<void> {
    return this.http.post<void>(`${this.baseApiUrl}/cadastrar`, usuario);
  }

  public login(usuarioLogin: string): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.baseApiUrl}/login?login=${usuarioLogin}`)
    .pipe(
      tap((usuarioDTO) => {
        localStorage.setItem('usuario', JSON.stringify(usuarioDTO));
      })
    );
  }

  public getUsuarios(): Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(`${this.baseApiUrl}/todos`)
  }
  
  public alterarUsuario(id: number, dados: any): Observable<void> {
    return this.http.put<void>(`${this.baseApiUrl}/alterar-login/${id}`, dados);
  }

  public excluirUsuario(id: number) {
    return this.http.delete(`${this.baseApiUrl}/excluir/${id}`);
  }
}
