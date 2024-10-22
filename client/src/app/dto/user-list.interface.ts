// user-list.interface.ts
import { UserWorkloadDTO } from './user-workload.interface'; // Adjust the path if needed

export interface UserListDTO {
  userId: string;                 // Unique identifier for the user
  email: string;                  // User's email address
  telephone: string;              // User's telephone number
  profile: string;                // Profile information
  invitationStatus: string;       // Status of the user's invitation (e.g., Pending, Accepted)
  name: string;                   // Full name of the user
  role: string;                   // Role of the user (e.g., Admin, User)
  userID: string;                 // Additional unique identifier for the user
  firstName: string;              // User's first name
  lastName: string;               // User's last name
  workload: number;               // Number of cases assigned to the user
  username: string;               // Username of the user
  showCases?: boolean;            // Flag to show or hide the user's workload
  cases?: UserWorkloadDTO[]; 
       // Array of workload items (cases) associated with the user
}
