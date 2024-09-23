import { bootstrapApplication } from '@angular/platform-browser';
import { ContatosComponent } from './app/pages/contatos/contatos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(ContatosComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
    )
  ]
}).catch(err => console.error(err));
