import { View } from "react-native-web";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutpu({ expenses }) {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutpu;
