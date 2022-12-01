import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroMainComponent } from './primeiro-main/primeiro-main.component';
import { QuartoMainGeneroComponent } from './quarto-main-genero/quarto-main-genero.component';
 import { SegundoMainUsuarioComponent } from './segundo-main-usuario/segundo-main-usuario.component';
import { TerceiroMainFilmesComponent } from './terceiro-main-filmes/terceiro-main-filmes.component';

const routes: Routes = [
  {path:'', redirectTo: 'primeiro-main', pathMatch:'full'},
  {path:'primeiro-main', component:PrimeiroMainComponent },
 {path:'segundo-main-usuario', component:SegundoMainUsuarioComponent },
  {path:'terceiro-main-filmes', component:TerceiroMainFilmesComponent},
  {path:'quarto-main-genero', component:QuartoMainGeneroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

