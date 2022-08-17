import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../components/store/expenses-context";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { getDateMinusDays } from "./util/date";
import { fetchExpenses } from "./util/http";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
  const recentExepenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();

    const date7daysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7daysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExepenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}
