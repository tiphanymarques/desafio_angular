import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeiroMainComponent } from './primeiro-main/primeiro-main.component';
import { SegundoMainUsuarioComponent } from './segundo-main-usuario/segundo-main-usuario.component';
import { TerceiroMainFilmesComponent } from './terceiro-main-filmes/terceiro-main-filmes.component';
import { QuartoMainGeneroComponent } from './quarto-main-genero/quarto-main-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrimeiroMainComponent,
    SegundoMainUsuarioComponent,
    TerceiroMainFilmesComponent,
    QuartoMainGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
