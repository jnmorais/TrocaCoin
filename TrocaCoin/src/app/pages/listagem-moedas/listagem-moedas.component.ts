import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IMoeda } from '../../model/IMoeda';
import { ListagemService } from './Listagem.service';

@Component({
  selector: 'app-listagem-moedas',
  templateUrl: './listagem-moedas.component.html',
  styleUrls: ['./listagem-moedas.component.scss']
})
export class ListagemMoedasComponent implements OnInit, AfterViewInit {
  

  colunasExibidas: string[] = ['codigo', 'taxa'];
 
  dataSource = new MatTableDataSource<IMoeda>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isError: boolean = false;

  constructor(private listagemService: ListagemService) {}

  ngOnInit(): void {
    this.listagemService.listarMoedas().subscribe({
      next: (res) => {
        console.log('Resposta da API:', res);
        
       
        const moeda: IMoeda[] = Object.entries(res.conversion_rates).map(([moeda, taxa]) => ({
          moeda: moeda,
          taxa: taxa
        }));
        
        this.dataSource.data = moeda;
        console.log('DataSource após transformação:', this.dataSource.data);
      },
      error: (er) => {
        console.error('Erro na API:', er);
        this.isError = true;
      },
      complete: () => {
        this.isError = false;
        console.log("Completou");
      }
    });
    
  }

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}