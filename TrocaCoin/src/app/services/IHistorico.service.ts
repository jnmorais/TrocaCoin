import { Injectable } from '@angular/core';
import { IHistorico } from '../model/IHistorico';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private historicoKey = 'historicoConversoes';
  private historicoSubject = new BehaviorSubject<IHistorico[]>([]);

  constructor() {
    this.carregarHistorico();
  }

  private carregarHistorico(): void {
    const historico = localStorage.getItem(this.historicoKey);
    if (historico) {
      this.historicoSubject.next(JSON.parse(historico));
    }
  }

  private salvarHistorico(historico: IHistorico[]): void {
    localStorage.setItem(this.historicoKey, JSON.stringify(historico));
    this.historicoSubject.next(historico);
  }

  adicionarConversao(conversao: Omit<IHistorico, 'id'>): void {
    const historico = this.historicoSubject.value;
    const novaConversao: IHistorico = {
      ...conversao,
      id: Date.now()
    };
    this.salvarHistorico([...historico, novaConversao]);
  }

  getHistorico(): Observable<IHistorico[]> {
    return this.historicoSubject.asObservable();
  }

  excluirConversao(id: number): void {
    const historico = this.historicoSubject.value;
    const novoHistorico = historico.filter(conv => conv.id !== id);
    this.salvarHistorico(novoHistorico);
  }

  getConversoesAltoValor(limite: number = 1000): IHistorico[] {
    return this.historicoSubject.value.filter(conv => conv.valorOrigem > limite);
  }
}