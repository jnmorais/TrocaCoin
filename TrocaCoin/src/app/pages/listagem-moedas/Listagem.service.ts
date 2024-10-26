import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IMoedaResponse } from '../../model/IMoedaResponse';


@Injectable({
  providedIn: 'root'
})
export class ListagemService {

constructor(private http: HttpClient) { }

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
}
