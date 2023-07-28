import { TestBed } from '@angular/core/testing';

import { SoketIoService } from './soket-io.service';

describe('SoketIoService', () => {
  let service: SoketIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoketIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
