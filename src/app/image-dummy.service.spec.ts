import { TestBed } from '@angular/core/testing';

import { ImageDummyService } from './image-dummy.service';

describe('ImageDummyService', () => {
  let service: ImageDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
