import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../components/store/expenses-context";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { getDateMinusDays } from "./util/date";
import { fetchExpenses } from "./util/http";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }

      setIsFetching(!isFetching);
    }
    getExpenses();
  }, []);

  const erroHandler = () => {
    setError(null);
  };

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={erroHandler} />;
  }
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
