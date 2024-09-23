import { APIKEY } from "@env";
import ApiClient from "../api_client/ApiClient";
import ExchangeRateModel from "../models/ExchangeRateModel";

export default GetExchangeRate = async ({source, destination}) => {
    const url = `/v6/${APIKEY}/pair/${source}/${destination}`;
    const res = await ApiClient().get(url);

    return new ExchangeRateModel(res.data);
}