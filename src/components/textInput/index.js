import React from 'react'
import { StyleSheet, Text, TextInput, } from 'react-native'

const textInput = ({label,placeholder,type,OnChangeText,namaState,value}) => {
    return (
        <>
            <Text style={styles.label}>{label} :</Text>
            <TextInput 
            keyboardType={type} 
            style={styles.textInput} 
            placeholder={placeholder} 
            value={value}
            onChangeText={(text) => OnChangeText(namaState,text)}

            />
        </>
    )
}

export default textInput

const styles = StyleSheet.create({
    label: {
        marginTop:10,
        fontSize:16,
        fontWeight:'bold',
    },
    textInput : {
        marginTop:10,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        padding:10
    }
})
