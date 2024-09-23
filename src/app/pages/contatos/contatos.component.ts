import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatosService } from '../../services/contatos/contatos.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { Contato } from '../../interfaces/contato.interface';

@Component({
  selector: 'app-contatos',
  standalone: true, // Isso deve estar aqui
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatListModule],
})
export class ContatosComponent {
  private _contatos = inject(ContatosService);
  private fb = inject(FormBuilder);

  contatosForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required]
  });

  public contatos = computed(() => this._contatos.contatos());

  adicionarContato() {
    if (this.contatosForm.valid) {
      const novoContato: Contato = {
        id: this.contatos.length + 1,
        ...this.contatosForm.value
      };
      this._contatos.adicionarContato(novoContato);
      this.contatosForm.reset();
    }
  }
}
