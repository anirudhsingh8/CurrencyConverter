import { Text, TextInput, View } from "react-native";

export default CurrencyInput = ({ label, value, onChange, readOnly = false }) => (
    <View className="flex-row justify-center items-center">
      <Text className="mr-4 font-semibold text-xl">{label}</Text>
      <TextInput
        value={value.toString()}
        onChangeText={!readOnly ? onChange : null}
        editable={!readOnly}
        className="flex-1 bg-cyan-100 rounded-md font-semibold px-2 py-4 text-xl"
      />
    </View>
  );
  