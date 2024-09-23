import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component'; // Componente para a lista de contatos

export const routes: Routes = [
  { path: 'contatos', component: ContatosComponent }, // Rota para a lista de contatos
  { path: '**', redirectTo: '' } // Redireciona para a página inicial em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa as rotas
  exports: [RouterModule] // Exporta o RouterModule para que possa ser utilizado em outros módulos
})
export class AppRoutingModule {}
