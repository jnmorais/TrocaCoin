import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConversorService } from './conversor.service';
import { IMoeda } from '../../model/IMoeda';
import { HistoricoService } from '../../services/IHistorico.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrl: './conversor-moedas.component.scss',
})
export class ConversorMoedasComponent implements OnInit {
  moedas: IMoeda[] = [];
  moedaOrigem: string = '';
  moedaDestino: string = '';
  valor: number = 0;
  valorConvertido: number = 0;
  taxaConversao: number = 0;
  exibirResultado: boolean = false;

  constructor(
    private conversorService: ConversorService,
    private historicoService: HistoricoService,
    private toastr: ToastrService
  ) {}

  converter() {
    if (!this.moedaOrigem || !this.moedaDestino || !this.valor) {
      this.toastr.warning('Por favor, preencha todos os campos');
      return;
    }
    if (this.moedaOrigem === this.moedaDestino) {
      this.toastr.warning('Não é possível converter moedas iguais');
      return;
    }
    this.conversorService
      .converterMoedas(this.moedaOrigem, this.moedaDestino, this.valor)
      .subscribe({
        next: (response) => {
          const taxaOrigem = response.conversion_rates[this.moedaOrigem];
          const taxaDestino = response.conversion_rates[this.moedaDestino];

          this.taxaConversao = taxaDestino / taxaOrigem;
          this.valorConvertido = this.valor / (taxaOrigem / taxaDestino);
          this.exibirResultado = true;

          const agora = new Date();
          this.historicoService.adicionarConversao({
            data: agora,
            hora: agora.toLocaleTimeString(),
            valorOrigem: this.valor,
            moedaOrigem: this.moedaOrigem,
            valorDestino: this.valorConvertido,
            moedaDestino: this.moedaDestino,
            taxaConversao: this.taxaConversao
          });

          this.toastr.success('Conversão realizada com sucesso!');
        },
        error: (error) => {
          console.error('Erro na conversão', error);
          this.toastr.error('Erro ao realizar a conversão. Tente novamente.');
        },
      });
  }

  fecharResultado() {
    this.exibirResultado = false;
    this.valor = 0;
    this.moedaOrigem = '';
    this.moedaDestino = '';
  }

  ngOnInit(): void {
    this.conversorService.listarMoedas().subscribe({
      next: (response) => {
        for (const key in response.conversion_rates) {
          this.moedas.push({
            moeda: key,
            taxa: response.conversion_rates[key],
          });
        }
        
      },
      error: (error) => {
        console.error('Erro ao carregar moedas', error);
        this.toastr.error('Erro ao carregar a lista de moedas.');
      },
    });
  }
}