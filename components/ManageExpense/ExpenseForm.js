import { useState } from "react";
import { Form, TextInput, View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../screens/util/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    //EntredText will be avalable by react, if we use the fucntion where there  are an onChangeText()
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value, //+will convert the string to a number
      date: new Date(inputs.date.value), //Covert date string to date object
      title: inputs.title.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.toString() !== "Invalid Date";
    const titleIsValid = expenseData.title.trim().length > 0;
    //trim to remove the white space of the string

    if (!amountIsValid || !titleIsValid || !dateIsValid) {
      //Show feedback
      //Alert.alert("Invalid input", "Please check your input values");
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          title: { value: curInputs.title.value, isValid: titleIsValid },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };
  const formIsInvalid =
    !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            KeyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs["amount"].value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs["date"].value,
          }}
        />
      </View>

      <Input
        label="title"
        invalid={!inputs.title.isValid}
        textInputConfig={{
          multiline: true,
          //autoCorrect: false, //default is true
          //autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "title"),
          value: inputs["title"].value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
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
