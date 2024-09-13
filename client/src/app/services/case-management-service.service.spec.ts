import { TestBed } from '@angular/core/testing';

import { CaseManagementServiceService } from './case-management-service.service';

describe('CaseManagementServiceService', () => {
  let service: CaseManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
