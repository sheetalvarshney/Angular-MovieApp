import { TestBed, inject } from '@angular/core/testing';

import { FavouriteListService } from './favourite-list.service';

describe('FavouriteListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouriteListService]
    });
  });

  it('should be created', inject([FavouriteListService], (service: FavouriteListService) => {
    expect(service).toBeTruthy();
  }));
});
