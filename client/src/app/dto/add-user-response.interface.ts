import { UserListDTO } from "./user-list.interface"; // Adjust the path as needed

export interface AddUserResponseDTO {
  message: string;
  status: boolean;
  newUser: UserListDTO;
}
