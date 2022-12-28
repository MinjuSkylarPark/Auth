import { KeyboardAvoidingView, StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    //키보드가 화면가리는거 방지용s
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
    <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        // value={ }
        // onChangeText={text=>}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        // value={ }
        // onChangeText={text=>}
        //비반칠때 **표시
        secureTextEntry
        style={styles.input}
        />
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{}} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={[styles.button, styles.buttonOuline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
    </View>
    
    </KeyboardAvoidingView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    //TextInput공간
    inputContainer:{
        width:'60%'
    },
    //이멜.비번치는 공간 Input내부
    input:{
        backgroundColor:'white',
        //이멜 비번치는 공간내부 수평/수직
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        //이멜/패스워드 각각 네모박스 딱안붙게 띄움
        marginTop:5,
    },
    buttonContainer:{
        //로그인/등록 박스 두 개 크기+중앙정렬
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'skyblue',
        width:'100%',
        padding:15,
        borderRadius:10,
        //버튼내부텍스트 중앙정렬
        alignItems:'center'
    },
    buttonOuline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'skyblue',
        borderWidth:3,
    },

    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,

    },
    buttonOutlineText:{
        color:'grey',
        fontWeight:'700',
        fontSize:16,
    },

})