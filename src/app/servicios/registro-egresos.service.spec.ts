import { TestBed } from '@angular/core/testing';

import { RegistroEgresosService } from './registro-egresos.service';

describe('RegistroEgresosService', () => {
  let service: RegistroEgresosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroEgresosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
