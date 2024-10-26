import { Component, OnInit } from '@angular/core';
import { ConversorService } from './conversor.service';
import { IMoeda } from '../../model/IMoeda';

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

  constructor(private conversorService: ConversorService) {}

  converter() {
    if (!this.moedaOrigem || !this.moedaDestino || !this.valor) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    this.conversorService
      .converterMoedas(this.moedaOrigem, this.moedaDestino, this.valor)
      .subscribe({
        next: (response) => {
          console.log('Resposta da API:', response);
          this.taxaConversao = response.conversion_rates[this.moedaDestino];
          this.valorConvertido = this.valor * this.taxaConversao;
          this.exibirResultado = true;
        },
        error: (error) => {
          console.error('Erro na conversão', error);
          alert('Erro ao realizar a conversão. Por favor, tente novamente.');
        },
      });
  }

  fecharResultado() {
    this.exibirResultado = false;
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
        alert('Erro ao carregar a lista de moedas.');
      },
    });
  }
}
