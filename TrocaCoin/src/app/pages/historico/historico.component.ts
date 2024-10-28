import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/IHistorico.service';
import { IHistorico} from '../../model/IHistorico';

@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoConversoesComponent implements OnInit {
  historicoConversoes: IHistorico[] = [];
  mostrarAltoValor: boolean = false;

  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    this.historicoService.getHistorico().subscribe(historico => {
      this.historicoConversoes = historico;
    });
  }

  excluirConversao(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta conversão?')) {
      this.historicoService.excluirConversao(id);
    }
  }
}