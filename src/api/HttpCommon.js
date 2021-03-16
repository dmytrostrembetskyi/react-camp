import axios from "axios";

export function InitAxios() {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    axios.defaults.baseURL = baseUrl;
}