import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "SET":
      return action.payload;
    case "UPDATE":
      //1)find the index of the expense needed update

      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      //2)find the expense needed update using its index
      const updatableExpense = state[updatableExpenseIndex];

      //3)Update the expense by the data coming from action.payload

      const updatedItem = {
        ...updatableExpense,
        ...action.payload.expenseData,
      };

      //3)Copy the list of  expense
      const updatedExpenses = [...state];

      //4)Give the expense the new updated value
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      //4)Return the updated list
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    //console.log("DD", id);
    dispatch({ type: "UPDATE", payload: { id, expenseData } });
  }
  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
