import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component'; // Componente para a lista de contatos

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contatos'},
  { path: 'contatos', component: ContatosComponent }, // Rota para a lista de contatos
  { path: '**', redirectTo: '' } // Redireciona para a página inicial em caso de rota não encontrada
];