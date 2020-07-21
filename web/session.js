import Cookie from "js-cookie";

export const setSender = (sender) =>
  Cookie.set("sender", sender, { expires: 365 });

export const setAuthToken = (authToken) =>
  Cookie.set("authToken", authToken, { expires: 365 });

export const getSender = () => Cookie.get("sender");

export const getAuthToken = () => Cookie.get("authToken");

export const deleteUser = () => Cookie.remove("sender");

export const deleteAuthToken = () => Cookie.remove("authToken");
