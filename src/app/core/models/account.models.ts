export type Role = 'STANDARD_USER' | 'ADMIN_USER';

export namespace RoleValues {
  export const STANDARD_USER: Role = 'STANDARD_USER';
  export const ADMIN_USER: Role = 'ADMIN_USER';
}

export interface AccountModel {
  authenticated: boolean;
  access_token: string;
  userId: number;
  roles: Role[];
}
