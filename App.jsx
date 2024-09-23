import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import CurrencyConversionScreen from './screens/CurrencyConversionScreen';

export default function App() {
  return (
    <View className="flex-1 px-8">
      <StatusBar style="auto" />
      <SafeAreaView />
      <CurrencyConversionScreen />
    </View>
  );
}