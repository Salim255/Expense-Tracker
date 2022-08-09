import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId; //To convert the value into booolen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpenses</Text>;
}
