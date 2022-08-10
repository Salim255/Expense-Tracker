import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../components/store/expenses-context";
import { getDateMinusDays } from "./util/date";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExepenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();

    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date > date7daysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExepenses} expensesPeriod="Last 7 Days" />
  );
}
