import { createContext, useReducer } from "react";
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
  {
    id: "e6",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-08-09"),
  },
  {
    id: "e7",
    title: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-07-20"),
  },
  {
    id: "e8",
    title: "Some bananas",
    amount: 5.99,
    date: new Date("2021-08-09"),
  },
  {
    id: "e9",
    title: "A book",
    amount: 14.99,
    date: new Date("2022-02-01"),
  },
  {
    id: "e10",
    title: "A pair of shoes",
    amount: 18.59,
    date: new Date("2022-05-03"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ childern }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense({ id, expenseData }) {
    dispatch({ type: "UPDATE", payload: { id, expenseData } });
  }
  return <ExpensesContext.Provider>{childern}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
