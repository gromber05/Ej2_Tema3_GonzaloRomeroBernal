import { TestBed } from '@angular/core/testing';

import { DatosClienteService } from './datos-cliente';

describe('DatosCliente', () => {
  let service: DatosClienteService  ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
