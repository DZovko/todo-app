
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import  Header  from './components/header';



export default function App() {
 const [todos,setTodos]= useState([
  {text:'buy coffe', key:'1'},
  {text:'create an app', key:'2'},
  {text:'play games', key:'3'},


 ])
  
  


  return (
  
    <View style={styles.container}> 
     {/*heather*/}
    
     <Header />
      <View style={styles.content}>
        {/*to do form */}

        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
            <Text>{item.text}</Text>
          )}
          />
        </View>
      </View>
    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    padding: 40,
  },
  list:{
    margintop: 20,
  },
  

 
});
