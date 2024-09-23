import { Injectable, Signal, signal } from '@angular/core';
import { Contato } from '../../interfaces/contato.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  public contatos = signal<Contato[]>([]);

  adicionarContato(contato: Contato) {
    this.contatos.update((contatos) => [...contatos, contato]);
  }
}
