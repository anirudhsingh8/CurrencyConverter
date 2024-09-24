import { TextInput, View } from "react-native";
import CurrencyDropdown from "./CurrencyDropdown";

export default CurrencyInput = ({
  label,
  value,
  onChange,
  onCurrencyChange,
  readOnly = false,
}) => {
  return (
    <View className="flex-row justify-center items-center">
      <CurrencyDropdown
        label={label}
        onCurrencyChange={onCurrencyChange}
      />
      <TextInput
        value={value.toString()}
        onChangeText={!readOnly ? onChange : null}
        editable={!readOnly}
        className="flex-1 bg-cyan-100 rounded-md font-semibold px-2 py-4 text-xl"
      />
    </View>
  );
};
