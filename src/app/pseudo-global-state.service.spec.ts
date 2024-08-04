import { TestBed } from '@angular/core/testing';

import { PseudoGlobalStateService } from './pseudo-global-state.service';

describe('PseudoGlobalStateService', () => {
  let service: PseudoGlobalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PseudoGlobalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
