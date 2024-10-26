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
import { MatPaginatorModule,  MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './component/nav/nav.component';
import { provideHttpClient } from '@angular/common/http';
import { ConversorMoedasComponent } from './pages/conversor-moedas/conversor-moedas.component';
import { FormsModule } from '@angular/forms';
import { getPtBRPaginatorIntl } from './ptbr-paginator-intl';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListagemMoedasComponent,
    NavComponent,
    ConversorMoedasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [provideHttpClient(), provideAnimations(),{provide: MatPaginatorIntl, useValue: getPtBRPaginatorIntl()}],
  bootstrap: [AppComponent]
})
export class AppModule { }
