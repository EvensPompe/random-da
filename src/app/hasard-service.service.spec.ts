import { TestBed } from '@angular/core/testing';

import { HasardServiceService } from './hasard-service.service';

describe('HasardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HasardServiceService = TestBed.get(HasardServiceService);
    expect(service).toBeTruthy();
  });
});
