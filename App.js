import { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";

import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";

const Bottomtab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // Object with two props

function ExpensesOverview() {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {}}
          />
        ),
      }}
    >
      <Bottomtab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Bottomtab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "AllExpenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Bottomtab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MangeExpense" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
