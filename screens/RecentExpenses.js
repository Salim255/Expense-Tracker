import {Text, View, StyleSheet} from 'react-native'

export default function RecentExpenses() {
  return (
    <View style={styles.containner}>
    <Text>AllExpenses</Text>
</View>
  )
}

const styles = StyleSheet.create({
    containner:{
        flex:1, 
       justifyContent: 'center',
       alignItems: 'center',
       /* backgroundColor: '#177' */

    }
})