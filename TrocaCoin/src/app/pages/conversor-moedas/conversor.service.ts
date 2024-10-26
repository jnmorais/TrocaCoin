import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IMoedaResponse } from '../../model/IMoedaResponse';


@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  constructor(private http: HttpClient) {}

  getHeaders(){
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+environment.apiKey
      })
    };
  }

  listarMoedas(): Observable <IMoedaResponse>{
    let url = environment.api_url
  const options = this.getHeaders();
  return this.http.get<IMoedaResponse>(url,options);
  }

  converterMoedas(moedaOrigem: string, moedaDestino: string, valor: number): Observable<IMoedaResponse>{
    const url = `${environment.api_url}/pair/${moedaOrigem}/${moedaDestino}/${valor}`;
    return this.http.get<IMoedaResponse>(url, this.getHeaders())
  }

}
