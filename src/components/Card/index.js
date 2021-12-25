import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = ({id,barangsItem,navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Detail',{id:id})}>
            <View>
                <Text style={styles.title}>{barangsItem.kd_brg}</Text>
                <Text style={styles.name}>{barangsItem.nm_brg}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faEdit} color={'orange'} size={25}/>
                <FontAwesomeIcon icon={faTimes} color={'red'} size={25} />
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flexDirection:'row',
        padding:15,
        borderRadius:5,
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontWeight:'bold',
        fontSize:20
    },
    name: {
        fontSize:13,
        color:'gray'
    }, 
    icon: {
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    }
})
