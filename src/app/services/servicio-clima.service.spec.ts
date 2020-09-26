import { TestBed } from '@angular/core/testing';

import { ServicioClimaService } from './servicio-clima.service';

describe('ServicioClimaService', () => {
  let service: ServicioClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
