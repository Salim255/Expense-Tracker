import { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
//npm install @react-navigation/native-stack

const Bottomtab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();// Object with two props
export default function App() {

 
  return (
   <> 
      <StatusBar style="dark" />
      <NavigationContainer>
       {/*  <Stack.Navigator>
          <Stack.Screen name='allExpenses' component={AllExpenses} />
        </Stack.Navigator> */}
        <Bottomtab.Navigator screenOptions={{
           headerStyle: {backgroundColor: '#6B8C95'},
           headerTinColor: 'red',
           tabBarActiveTintColor: '#DE972B',
           tabBarItemStyle: {backgroundColor: '#6B8C95'},
           
           
          // drawerStyle: {backgroundColor: "#ccc"}
        }} >
           <Bottomtab.Screen  name='Recent' component={RecentExpenses} options={{
                   tabBarIcon: ({color, size}) => <Entypo name='hour-glass'  color={color} size={size}/>
                   ,
              headerTitle: 'RecentExpenses'
             }}/>
            <Bottomtab.Screen  name='AllExpenses' component={AllExpenses}
             options={{
              tabBarIcon: ({color, size}) => <AntDesign  name='calendar'  color={color} size={size}
              /> 
           
         }}/>
         
        </Bottomtab.Navigator>
        
      </NavigationContainer>
   

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
