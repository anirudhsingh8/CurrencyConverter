class ExchangeRateModel {
    constructor(data, destination) {
        this.source = data.source;
        this.destination = destination;
        this.exchangeRate = data.quotes[`${data.source}${destination}`];
    }
}

export default ExchangeRateModel;