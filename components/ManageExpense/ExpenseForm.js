import { Form, TextInput, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="amount"
        textInputConfig={{
          KeyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="title" textInputConfig={{}} />
    </View>
  );
};

export default ExpenseForm;
