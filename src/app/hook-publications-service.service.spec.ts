import { TestBed } from '@angular/core/testing';

import { HookPublicationsService } from './hook-publications-service.service';

describe('HookPublicationsServiceService', () => {
  let service: HookPublicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HookPublicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
