export function setLocalStorageItem(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function getLocalStorageItem(key: string) {
  return localStorage.getItem(key);
}

export function removeLocalStorageItem(key: string) {
  return localStorage.removeItem(key);
}
