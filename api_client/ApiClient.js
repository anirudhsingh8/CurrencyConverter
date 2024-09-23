import { BASEURL } from "@env";
import axios from "axios";

export default ApiClient = axios.create({
    baseURL: BASEURL,
    timeout: 1000,
});