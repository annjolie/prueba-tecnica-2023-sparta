import { v4 as uuidv4 } from 'uuid';
export interface LoginResponse {
  token: string;
}
// esta funcion es la que se encarga de hacer el login y devuelve una promesa con los datos que se necesitan para el reducer de redux
export const loginHandler = (): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    resolve({
      token: uuidv4()
    });
  });
};
// esta funcion es la que maneja el logout y devuelve una promesa vacia para que el reducer de redux sepa que ya se termino de hacer la llamada a la api
export const logoutHandler = (): Promise<void> => {
  return new Promise((resolve) => {
    resolve();
  });
};
