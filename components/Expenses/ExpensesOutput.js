import { View } from "react-native-web";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-09"),
  },
  {
    id: "e2",
    title: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-07-20"),
  },
  {
    id: "e3",
    title: "Some bananas",
    amount: 5.99,
    date: new Date("2021-08-09"),
  },
  {
    id: "e4",
    title: "A book",
    amount: 14.99,
    date: new Date("2022-02-01"),
  },
  {
    id: "e5",
    title: "A pair of shoes",
    amount: 18.59,
    date: new Date("2022-05-03"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
