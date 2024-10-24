import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListagemMoedasComponent } from './pages/listagem-moedas/listagem-moedas.component';

const routes: Routes = [
  {path: '', redirectTo: 'pagina-principal', pathMatch: 'full'},
  {path: 'pagina-principal', component: PrincipalComponent},
  {path: 'listagem-moedas',component: ListagemMoedasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
