/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ListagemService } from './Listagem.service';

describe('Service: Listagem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListagemService]
    });
  });

  it('should ...', inject([ListagemService], (service: ListagemService) => {
    expect(service).toBeTruthy();
  }));
});
