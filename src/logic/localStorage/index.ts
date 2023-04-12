export const localStorageGetItem = (key: string) => {
  console.log('localStorageGetItem', key);

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
