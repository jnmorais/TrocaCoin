import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListagemMoedasComponent } from './pages/listagem-moedas/listagem-moedas.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './component/nav/nav.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ConversorMoedasComponent } from './pages/conversor-moedas/conversor-moedas.component';
import { FormsModule } from '@angular/forms';
import { getPtBRPaginatorIntl } from './ptbr-paginator-intl';
import { HistoricoConversoesComponent } from './pages/historico/historico.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListagemMoedasComponent,
    NavComponent,
    ConversorMoedasComponent,
    HistoricoConversoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ...materialModules,
    ToastrModule.forRoot()
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
    {
      provide: MatPaginatorIntl, 
      useValue: getPtBRPaginatorIntl()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }