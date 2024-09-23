import { BASEURL } from "@env";
import axios from "axios";
import * as AxiosLogger from 'axios-logger';

export default ApiClient = () => {
    const instance = axios.create({
        baseURL: BASEURL,
        timeout: 1000,
    });

    instance.interceptors.request.use(AxiosLogger.requestLogger);

    return instance;
};