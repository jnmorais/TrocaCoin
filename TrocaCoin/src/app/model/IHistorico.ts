export interface IHistorico {
    id: number;
    data: Date;
    hora: string;
    valorOrigem: number;
    moedaOrigem: string;
    valorDestino: number;
    moedaDestino: string;
    taxaConversao: number;
  }