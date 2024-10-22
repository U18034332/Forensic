export interface ProfileDTO {
    profileId: string;
    name: string;
    description: string;
    rights: 'user' | 'admin';
  }
  