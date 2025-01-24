import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../categorias.enum';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  postagens = [
    {titulo: 'Lofi Lounge', categoria: Categorias.Lofi, descricao: 'Um ambiente acolhedor com uma vibe retrô e relaxante, onde o calor da lareira encontra o som suave de discos de vinil.', artista: 'Mel', img: 'assets/img/postagem1.gif' },
    {titulo: 'Estúdio da Bruxa Modernista', categoria: Categorias.Futurista, descricao: 'Uma bruxa urbana, cercada por poções, abóboras iluminadas e equipamentos vintage, enquanto aproveita a vista chuvosa e ouve música.', artista: 'Gabi', img: 'assets/img/postagem2.gif' },
    {titulo: 'Cafeteria Pixelada', categoria: Categorias.Comida, descricao: 'Retratação de uma pequena cafeteria com detalhes. A atmosfera inspira conforto e nostalgia.', artista: 'Vi', img: 'assets/img/postagem3.gif' },
    {titulo: 'Cozinha Nostálgica', categoria: Categorias.Comida, descricao: 'Uma cozinha clássica em pixel art, ingredientes prontos para uma refeição calorosa.', artista: 'Kaique', img: 'assets/img/postagem4.gif' },
    {titulo: 'Sushi ao Futuro', categoria: Categorias.Comida, descricao: 'Uma esteira de sushi futurista exibe pratos vibrantes, em uma estética tecnológica e aconchegante.', artista: 'Clara', img: 'assets/img/postagem5.gif' },
    {titulo: 'Avenida das Cerejeiras', categoria: Categorias.Urbano, descricao: 'Uma avenida repleta de flores de cerejeira sob a luz suave da lua, evocando tranquilidade e beleza em paralelo a movimentação urbana.', artista: 'Yas', img: 'assets/img/postagem6.gif' },
    {titulo: 'Silhuetas da Cidade', categoria: Categorias.Urbano || Categorias.Retro, descricao: 'Um personagem solitário observa as luzes da cidade, onde a urbanidade se mistura com o mistério.', artista: 'Yann', img: 'assets/img/postagem7.gif' },
    {titulo: 'Memórias do Arcade', categoria: Categorias.Retro, descricao: 'Uma garota em um arcade clássico, rodeada por máquinas de jogos, revivendo a nostalgia dos anos 80.', artista: 'Guiga', img: 'assets/img/postagem8.gif' },
    {titulo: 'Bar Neon', categoria: Categorias.Futurista, descricao: 'Um bar futurista iluminado por luzes de neon, onde personagens conversam em um ambiente imersivo.', artista: 'Vitao', img: 'assets/img/postagem9.gif' },
    { titulo: 'Estação Futurista', categoria: Categorias.Futurista || Categorias.Urbano, descricao: 'Estação de metrô futurista, com cartazes de procurados e uma atmosfera tecnológica.', artista: 'Uryel', img: 'assets/img/postagem10.gif' }
  ];
  
  postagensFiltradas = this.postagens;

  constructor() { }

  ngOnInit() {
  }

  pesquisar(e: Event): void {
    const digitado = e.target as HTMLInputElement;
    const valor = digitado.value.toLowerCase();

    this.postagensFiltradas = this.postagens.filter((item) => {
      return item.categoria.toLowerCase().includes(valor) || 
      item.titulo.toLowerCase().includes(valor) ||
      item.artista.toLowerCase().includes(valor)
    });
  }
}
