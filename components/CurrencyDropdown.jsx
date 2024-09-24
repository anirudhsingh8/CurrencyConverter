import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const CurrencyDropdown = ({ label, onCurrencyChange }) => {
  const renderLabel = () => {
    if (label) {
      return (
        <Text
          className="flex-1 px-2 font-semibold text-xl"
          style={[styles.label]}
        >
          {label}
        </Text>
      );
    }
    return null;
  };

  const supportedCurrencies = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
  ];

  return (
    <View className="flex-1">
      {renderLabel()}
      <Dropdown
        value={label}
        valueField={"label"}
        style={styles.dropdown}
        onChange={(item) => {
          onCurrencyChange(item.value);
        }}
        renderItem={(item, isSelected) => {
          return (
            <Text
              className={`pl-2 py-1 font-semibold text-xl ${
                isSelected ? "text-indigo-400" : "text-black"
              }`}
            >
              {item.label}
            </Text>
          );
        }}
        data={supportedCurrencies}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 56,
    flex: 1,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    marginRight: 10,
    paddingRight: 10,
  },
  label: {
    position: "absolute",
    left: 2,
    top: 16,
    zIndex: 999,
  },
});

export default CurrencyDropdown;
