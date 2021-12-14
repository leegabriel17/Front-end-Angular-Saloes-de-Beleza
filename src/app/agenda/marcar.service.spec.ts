import { TestBed } from '@angular/core/testing';

import { MarcarService } from './marcar.service';

describe('MarcarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcarService = TestBed.get(MarcarService);
    expect(service).toBeTruthy();
  });
});
