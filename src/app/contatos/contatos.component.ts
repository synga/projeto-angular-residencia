import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatosService, Contato } from '../contatos.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-contatos',
  standalone: true, // Isso deve estar aqui
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatListModule],
})
export class ContatosComponent implements OnInit {
  contatosForm: FormGroup;
  contatos: Contato[] = [];

  constructor(private fb: FormBuilder, private contatosService: ContatosService) {
    this.contatosForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.contatosService.contatos$.subscribe(data => {
      this.contatos = data;
    });
  }

  adicionarContato() {
    if (this.contatosForm.valid) {
      const novoContato: Contato = {
        id: this.contatos.length + 1,
        ...this.contatosForm.value
      };
      this.contatosService.adicionarContato(novoContato);
      this.contatosForm.reset();
    }
  }
}
