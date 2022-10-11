import { TestBed } from '@angular/core/testing';

import { MinimalUiService } from './minimal-ui.service';

describe('MinimalUiService', () => {
  let service: MinimalUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimalUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
