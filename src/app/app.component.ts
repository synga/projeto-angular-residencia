import { Component } from '@angular/core';
import { ContatosComponent } from './contatos/contatos.component'; // Importando o componente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Modo standalone
  imports: [ContatosComponent] // Adicione aqui
})
export class AppComponent {
  title = 'lista-contatos';
}
