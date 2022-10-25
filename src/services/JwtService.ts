const ID_TOKEN_KEY = "id_token" as string;
const CLIENT_TOKEN_KEY = "client_token" as string;
/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const saveClientToken = (token: string): void => {
  window.localStorage.setItem(CLIENT_TOKEN_KEY, token);
};

export const getClientToken = (): void => {
  window.localStorage.getItem(CLIENT_TOKEN_KEY);
};
export default {
  getToken,
  saveToken,
  destroyToken,
  saveClientToken,
  getClientToken,
};
