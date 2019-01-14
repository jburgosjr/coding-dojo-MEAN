import { TestBed } from '@angular/core/testing';

import { ChoiService } from './choi.service';

describe('ChoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoiService = TestBed.get(ChoiService);
    expect(service).toBeTruthy();
  });
});
