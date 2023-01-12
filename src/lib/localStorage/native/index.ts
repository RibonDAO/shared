import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setLocalStorageItem(key: string, value: string) {
  return AsyncStorage.setItem(key, value);
}

export async function getLocalStorageItem(key: string) {
  return AsyncStorage.getItem(key);
}

export async function removeLocalStorageItem(key: string) {
  return AsyncStorage.removeItem(key);
}
