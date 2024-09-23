import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import CurrencyInput from "../components/CurrencyInput";
import GetExchangeRate from "../services/GetExchangeRate";

const CurrencyConversionScreen = () => {
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("USD");
  const [sourceAmt, setSourceAmt] = useState(0.0);
  const [destination, setDestination] = useState("EUR");
  const [destinationAmt, setDestinationAmt] = useState(0.0);
  const [exchange, setExchangeModel] = useState(null);

  const fetchExchangeRate = useCallback(async () => {
    setLoading(true);
    try {
      const res = await GetExchangeRate({ source, destination });
      setExchangeModel(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [source, destination]);

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  useEffect(() => {
    if (exchange) {
      setDestinationAmt(sourceAmt * exchange.exchangeRate);
    }
  }, [sourceAmt, exchange]);

  if (loading) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="font-bold text-center text-lg my-4">
        Currency Converter
      </Text>

      <CurrencyInput
        label={source}
        value={sourceAmt}
        onChange={setSourceAmt}
      />

      {/* Separator */}
      <View className="flex-row py-4 items-center justify-center" />

      <CurrencyInput
        label={destination}
        value={destinationAmt}
        readOnly={true}
      />
    </View>
  );
};

export default CurrencyConversionScreen;
