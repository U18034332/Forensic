import { TestBed } from '@angular/core/testing';

import { NonFundedIncidentReportService } from './non-funded-incident-report.service';

describe('NonFundedIncidentReportService', () => {
  let service: NonFundedIncidentReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonFundedIncidentReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
