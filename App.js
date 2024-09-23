import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import GetExchangeRate from './services/GetExchangeRate';

export default function App() {
  useEffect(() => {
    async function testApi() {
      const res = await GetExchangeRate({
        source: "USD",
        destination: "EUR",
      });

      console.log(res);
    }

    testApi();
  }, []);
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}