import { BASEURL } from "@env";
import axios from "axios";

export default ApiClient = () => {
    const instance = axios.create({
        baseURL: BASEURL,
        timeout: 1000,
    });

    return instance;
};