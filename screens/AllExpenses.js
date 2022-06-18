import { useLayoutEffect } from 'react';
import {Text, View, StyleSheet, TextInput, Modal} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function AllExpenses({navigation}) {
    console.log(navigation);
    useLayoutEffect(() => {
        navigation.setOptions({
                headerRight: ( ) => {
                    return <AntDesign   name='plus' size={24} />
                }
        })
    })
  return (
    
        <View style={styles.containner}>
             <TextInput placeholder='HELLO WORLD 'style={styles.textInput} />
             <Text>List of products</Text>
        </View>
    
  
  )
}

const styles = StyleSheet.create({
     containner:{
         /* flex:1,  */
        justifyContent: 'center',
        alignItems: 'center',
        /* backgroundColor: '#177' */

     },
     textInput:{
        borderWidth:1, 
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding:16,
     }
})