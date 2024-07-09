export class FundingRelatedReport {
    title: string = '';
    description: string = '';
    fundingAmount: number = 0;
    selectedCaseType: string = '';
    selectedProvince: string = '';
    selectedStatus: string = '';
    selectedSubType: string = '';
    selectedChannel: string = '';
    selectedPriority: string = '';
    selectedOrganisation: string = '';
    selectedSourceDetection: string = '';
    selectedAllocatedDescription: string = '';
    selectedSector: string = '';
    selectedLevelDetected: string = '';
    selectedDivisionDetected: string = '';
  
    constructor(init?: Partial<FundingRelatedReport>) {
      Object.assign(this, init);
    }
  }
  
  export class NonFundingRelatedReport {
    title: string = '';
    description: string = '';
    selectedCaseType: string = '';
    selectedProvince: string = '';
    selectedStatus: string = '';
    selectedSubType: string = '';
    selectedChannel: string = '';
    selectedPriority: string = '';
    selectedOrganisation: string = '';
    selectedSourceDetection: string = '';
    selectedAllocatedDescription: string = '';
    selectedSector: string = '';
    selectedLevelDetected: string = '';
    selectedDivisionDetected: string = '';
  
    constructor(init?: Partial<NonFundingRelatedReport>) {
      Object.assign(this, init);
    }
  }
  
  export interface FormData {
    title: string;
    description: string;
    fundingAmount?: number;
    selectedCaseType: string;
    selectedProvince: string;
    selectedStatus: string;
    selectedSubType: string;
    selectedChannel: string;
    selectedPriority: string;
    selectedOrganisation: string;
    selectedSourceDetection: string;
    selectedAllocatedDescription: string;
    selectedSector: string;
    selectedLevelDetected: string;
    selectedDivisionDetected: string;
  }
  