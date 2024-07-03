import { CanActivateFn } from '@angular/router';

export const authServiceGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
