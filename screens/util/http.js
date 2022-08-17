import axios from "axios";
const BACKEND_URL =
  "https://react-native-course-3a4f1-default-rtdb.firebaseio.com";

export const storeExpense = (expenseData) => {
  axios.post(BACKEND_URL + "expenses.json", expenseData);
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "expenses.json");
  const expenses = [];
  //console.log(response);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      title: response.data[key].title,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};
