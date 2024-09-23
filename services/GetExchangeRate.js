import { APIKEY } from "@env";
import ApiClient from "../api_client/ApiClient";
import ExchangeRateModel from "../models/ExchangeRateModel";

export default GetExchangeRate = async ({source, destination}) => {
    const url = `/live?access_key=${APIKEY}&currencies=${destination}&source=${source}&format=1`;
    const res = await ApiClient().get(url);

    return new ExchangeRateModel(res.data, destination);
}