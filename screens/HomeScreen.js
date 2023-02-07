import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { firebaseConfig } from '../firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import { initializeApp } from '@firebase/app';

const HomeScreen = () => {

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const navigation = useNavigation();

  const handleSignOUt = ()=>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(error=>alert.apply(error.message))
  }
  return (
    <View style={styles.container}>
    <Text>Email:{auth.currentUser?.email}</Text>
    <TouchableOpacity style={styles.button} onPress={handleSignOUt}>
      <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  Text:{
    color:'skyblue',
    fontSize:22,
    fontWeight:'700'
  }
})