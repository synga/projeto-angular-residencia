import { bootstrapApplication } from '@angular/platform-browser';
import { ContatosComponent } from './app/contatos/contatos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

bootstrapApplication(ContatosComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    )
  ]
}).catch(err => console.error(err));
