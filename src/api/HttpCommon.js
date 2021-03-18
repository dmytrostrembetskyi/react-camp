import axios from "axios";
import { getToken } from "../components/auth/AuthService";

export function InitAxios() {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    axios.defaults.baseURL = baseUrl;

    setApiToken(getToken());
}

export function setApiToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
}

export function removeApiToken() {
    axios.defaults.headers.common['Authorization'] = '';
}