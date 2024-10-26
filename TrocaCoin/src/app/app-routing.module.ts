import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListagemMoedasComponent } from './pages/listagem-moedas/listagem-moedas.component';
import { ConversorMoedasComponent } from './pages/conversor-moedas/conversor-moedas.component';

const routes: Routes = [
  {path: '', redirectTo: 'pagina-principal', pathMatch: 'full'},
  {path: 'pagina-principal', component: PrincipalComponent, title: 'Pagina Principal'},
  {path: 'listagem-moedas',component: ListagemMoedasComponent, title: 'Listagem de Moedas'},
  {path: 'converter-moedas', component: ConversorMoedasComponent, title: 'Conversor de Moedas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
