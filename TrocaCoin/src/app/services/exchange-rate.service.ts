
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface RespostaTaxas {
  resultado: string;
  documentação: string;
  termos_de_uso: string;
  ultima_atualizacao_unix: number;
  ultima_atualizacao_utc: string;
  proxima_atualizacao_unix: number;
  proxima_atualizacao_utc: string;
  codigo_base: string;
  taxas_de_conversao: { [key: string]: number };
}

interface Moeda {
  codigo: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiKey = '5db33ba70e726b8ba1b99d76';
  private apiUrl = `https://v6.exchangerate-api.com/v6/5db33ba70e726b8ba1b99d76/latest/USD`;

  constructor(private http: HttpClient) { }


  obterTaxasConversao(): Observable<{ [chave: string]: number }> {
    return this.http.get<RespostaTaxas>(this.apiUrl).pipe(
      map(resposta => resposta.taxas_de_conversao),
      catchError(error => {
        console.error('Erro ao obter as taxas de conversão', error);
        return throwError(error);
      })
    );
  }


  obterListaMoedas(): Observable<Moeda[]> {
    const listaMoedas: Moeda[] = [
      { codigo: 'USD', nome: 'Dólar Americano' },
      { codigo: 'EUR', nome: 'Euro' },
      { codigo: 'GBP', nome: 'Libra Esterlina' },
      { codigo: 'JPY', nome: 'Iene Japonês' },
      { codigo: 'BRL', nome: 'Real Brasileiro' },
    ];
    return new Observable<Moeda[]>(observer => {
      observer.next(listaMoedas);
      observer.complete();
    });
  }
}
