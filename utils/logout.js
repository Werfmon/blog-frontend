import { getToMainPage } from "./getToMainPage";

export function logout() {
    sessionStorage.clear();
    getToMainPage();
}