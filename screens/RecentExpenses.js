import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

export default function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}
