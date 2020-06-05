import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModificateurComponent } from './modificateur/modificateur.component';
import { HeaderComponent } from './header/header.component';
import { BoutonHasardComponent } from './bouton-hasard/bouton-hasard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModificateurComponent,
    HeaderComponent,
    BoutonHasardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
