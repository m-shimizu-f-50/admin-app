import { TestBed } from '@angular/core/testing';

import { MesssageService } from './message.service';

describe('MesssageService', () => {
  let service: MesssageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesssageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
