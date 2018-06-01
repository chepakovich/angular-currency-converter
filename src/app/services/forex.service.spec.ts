import { TestBed, async, inject } from '@angular/core/testing';
import { ForexService } from './forex.service';

describe('ForexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForexService]
    });
  });

  it('should ...', inject([ForexService], (service: ForexService) => {
    expect(service).toBeTruthy();
  }));
});
