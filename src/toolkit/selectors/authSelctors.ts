import { AppState } from "@/@types/AppTypes";

export const selectUser = ({ auth }: AppState) => auth.user;
export const selectAccessToken = ({ auth }: AppState) => auth.accessToken;
export const selectIsLoggedIn = ({ auth }: AppState) => auth.isLoggedIn;
export const selectAuthIsLoading = ({ auth }: AppState) => auth.isLoading;
export const selectAuthError = ({ auth }: AppState) => auth.error;
export const selectState = ({ auth }: AppState) => auth;
// export const selectAuthRefreshToken = ({ auth }) => auth.data.refreshToken;
