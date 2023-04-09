import { v4 as uuidv4 } from 'uuid';

export interface LoginResponse {
  token: string;
}

export const loginHandler = (): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    resolve({
      token: uuidv4()
    });
  });
};

export const logoutHandler = (): Promise<void> => {
  return new Promise((resolve) => {
    resolve();
  });
};
