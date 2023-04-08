import { v4 as uuidv4 } from 'uuid';

export const loginHandler = () => {
  return new Promise((resolve) => {
    resolve({
      token: uuidv4()
    });
  });
};
