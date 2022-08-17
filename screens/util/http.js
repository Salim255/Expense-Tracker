import axios from "axios";
const BACKEND_URL =
  "https://react-native-course-3a4f1-default-rtdb.firebaseio.com/";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(BACKEND_URL + "expenses.json", expenseData);
  const id = response.data.name;
  return id;
};

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "expenses.json");
  const expenses = [];

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
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}
export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
