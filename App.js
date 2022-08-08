import { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
//npm install @react-navigation/native-stack

const Bottomtab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Object with two props

function ExpensesOverview() {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTinColor: "red",
        tabBarActiveTintColor: "#DE972B",
        tabBarItemStyle: { backgroundColor: "#6B8C95" },

        // drawerStyle: {backgroundColor: "#ccc"}
      }}
    >
      <Bottomtab.Screen name="RecentExpenses" component={RecentExpenses} />
      <Bottomtab.Screen name="AllExpenses" component={AllExpenses} />
    </Bottomtab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="MangeExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
