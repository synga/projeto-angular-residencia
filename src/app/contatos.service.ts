import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private contatos: Contato[] = [];
  private contatosSubject = new BehaviorSubject<Contato[]>(this.contatos);
  contatos$ = this.contatosSubject.asObservable();

  adicionarContato(contato: Contato) {
    this.contatos.push(contato);
    this.contatosSubject.next(this.contatos);
  }

  obterContatos(): Observable<Contato[]> {
    return this.contatosSubject.asObservable();
  }
}
