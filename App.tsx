import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';
import ChatList from './Components/ChatList';
import Footer from './Components/Footer';


const App = ()=>{


  return(
    <View style = {styles.container}>

      <Header />
      <ChatList />
      <Footer />
    </View>

  )
}

const styles = StyleSheet.create({

  container:{
    flex:1

  }

})

export default App;
