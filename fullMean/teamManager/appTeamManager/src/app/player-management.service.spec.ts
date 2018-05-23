import { TestBed, inject } from '@angular/core/testing';

import { PlayerManagementService } from './player-management.service';

describe('PlayerManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerManagementService]
    });
  });

  it('should be created', inject([PlayerManagementService], (service: PlayerManagementService) => {
    expect(service).toBeTruthy();
  }));
});
