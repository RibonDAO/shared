import AsyncStorage from "@react-native-async-storage/async-storage";
import { isNative, isWeb } from "../platformHelpers";

export function setLocalStorageItem(key: string, value: string): void {
  if (isNative()) {
    AsyncStorage.setItem(key, value);
  } else if (isWeb()) {
    localStorage.setItem(key, value);
  }
}

export async function getLocalStorageItem(key: string): Promise<string | null> {
  if (isNative()) {
    return AsyncStorage.getItem(key).then((value) => value);
  } else if (isWeb()) {
    return localStorage.getItem(key);
  }

  return null;
}

export function getSyncLocalStorageItem(key: string): string | null {
  if (isNative()) {
    return null;
  } else if (isWeb()) {
    return localStorage.getItem(key);
  }

  return null;
}

export function removeLocalStorageItem(key: string) {
  if (isNative()) {
    AsyncStorage.removeItem(key);
  } else if (isWeb()) {
    localStorage.removeItem(key);
  }
}
