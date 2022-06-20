import { useLayoutEffect } from 'react';
import {Text, View, StyleSheet, TextInput, Modal, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function AllExpenses({navigation}) {
   
    useLayoutEffect(() => {
        navigation.setOptions({
                headerRight: ( ) => {
                    return <AntDesign  style={styles.icon} name='plus' size={24} color={'white'} />
                }
        })
    })
  return (
    
        <View style={styles.containner}>
            <View  style={styles.total} >
            <Text style={styles.totalChild} >Total</Text>
                  <Text>$240.54</Text>
                 
            </View>
            
             {/* <TextInput placeholder='Total'style={styles.textInput} /> */}
            <Pressable  style={({presed}) => { 
                  (presed ? styles.bottonPressed : null)
            }}>
                <View style={styles.product}>
                    <View  style={styles. product1}>
                        
                            <Text style={styles.name1} >Name</Text>
                        
                            
                            
                            <Text  >02/06/2022</Text>
                            
                    </View>
                    <View style={styles. product2} >
                        <Text  >19.9</Text> 
                    </View>
                </View>
            </Pressable>
        </View>
    
  
  )
}

const styles = StyleSheet.create({
     containner:{
         /* flex:1,  */ 
        //justifyContent: 'center', 
        alignItems: 'center', 
         backgroundColor: '#177' ,
         height: '100%'

     },
     textInput:{
        borderWidth:1, 
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding:16,
     },
     icon:{
        marginRight: 4
     },
     text:{   
        width: '99%',
        textAlign: 'center',
        

     },
     total:{
        borderRadius: 6,
        backgroundColor: 'white',
        width: '99%',
        padding: 10,
        marginTop: 8,
        borderWidth: 1,
        flexDirection: 'row'
        
     },
     totalChild:{
        flexGrow: 1,
       
     },
     product:{
        borderRadius: 6,
        backgroundColor: 'blue',
        width: '90%',
        padding: 10,
        margin: 6,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#177'
       
     },
     product1:{
         flexGrow: 1
     },
     product2:{
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20
     },
     name1:{
       
        marginBottom: 2,
        color: 'white'
       
    
     },
     bottonPressed:{
        opacity: 0.7,
        backgroundColor: 'red'
     }
})