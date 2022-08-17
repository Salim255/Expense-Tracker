import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-3a4f1-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
};
