import { useState } from "react";
import { Form, TextInput, View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    title: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    //EntredText will be avalable by react, if we use the fucntion where there  are an onChangeText()
    setInputValues((curInputValues) => {
      return { ...curInputValues, [inputIdentifier]: enteredValue };
    });
  }
  const submitHandler = () => {};

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="amount"
          textInputConfig={{
            KeyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues["amount"],
          }}
        />
        <Input
          style={styles.rowInput}
          label="date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues["date"],
          }}
        />
      </View>

      <Input
        label="title"
        textInputConfig={{
          multiline: true,
          //autoCorrect: false, //default is true
          //autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "title"),
          value: inputValues["title"],
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
export default ExpenseForm;
