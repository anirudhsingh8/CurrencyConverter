class ExchangeRateModel {
    constructor(data) {
        this.source = data.base_code;
        this.destination = data.target_code;
        this.exchangeRate = data.conversion_rate;
    }
}

export default ExchangeRateModel;