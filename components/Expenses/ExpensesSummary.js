import { Text, View } from "react-native";

function ExpensesSummary({ expesnes, periodName }) {
  const expensesSum = expesnes.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFexed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
