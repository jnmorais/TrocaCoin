/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IHistoricoService } from './IHistorico.service';

describe('Service: IHistorico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IHistoricoService]
    });
  });

  it('should ...', inject([IHistoricoService], (service: IHistoricoService) => {
    expect(service).toBeTruthy();
  }));
});
