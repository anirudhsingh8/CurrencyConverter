import { FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GetExchangeRate from "../services/GetExchangeRate";

const CurrencyConversionScreen = () => {
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("USD");
  const [sourceAmt, setSourceAmt] = useState(0.0);
  const [destination, setDestination] = useState("EUR");
  const [destinationAmt, setDestinationAmt] = useState(0.0);
  const [exchange, setExchangeModel] = useState(null);

  function handleSourceAmountChange(val) {
    setSourceAmt(val);
  }

  function updateDestinationAmount() {
    if (exchange == null) return;

    setDestinationAmt(sourceAmt * exchange.exchangeRate);
  }

  async function fetchExchangeRate() {
    try {
      setLoading(true);
      const res = await GetExchangeRate({
        source: source,
        destination: destination,
      });
      setExchangeModel(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function swapCurrencies() {
    const temp = source;
    setSource(destination);
    setDestination(temp);
  }

  useEffect(() => {
    fetchExchangeRate();
  }, [destination]);

  useEffect(() => {
    updateDestinationAmount();
  }, [sourceAmt]);

  if (loading) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View className="flex-1">
      <Text className="font-bold text-center text-lg my-4">
        Currency Converter
      </Text>

      {/* Source Component */}
      <View className="flex-row justify-center items-center">
        <Text className="mr-4 font-semibold text-xl">{source}</Text>
        <TextInput
          value={sourceAmt.toString()}
          onChangeText={handleSourceAmountChange}
          className="flex-1 bg-cyan-100 rounded-md font-semibold px-2 py-4 text-xl"
        />
      </View>

      {/* Seperator */}
      <TouchableOpacity onPress={swapCurrencies}>
        <View className="flex-row py-8 items-center justify-center">
          <FontAwesome6 name="arrow-down-long" />
        </View>
      </TouchableOpacity>

      {/* Destination Component */}
      <View className="flex-row justify-center items-center">
        <Text className="mr-4 font-semibold text-xl">{destination}</Text>
        <TextInput
          value={destinationAmt.toString()}
          className="flex-1 bg-cyan-100 rounded-md font-semibold px-2 py-4 text-xl"
        />
      </View>
    </View>
  );
};

export default CurrencyConversionScreen;
