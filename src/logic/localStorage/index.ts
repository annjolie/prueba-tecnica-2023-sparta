// Description: This file contains the logic for local storage
// se hace asi porque si no da error en el server side rendering porque el lado del servidor no tiene acceso al local storage
export const localStorageGetItem = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

export const localStorageSetItem = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

export const localStorageRemoveItem = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.removeItem(key);
  }
  return null;
};
