import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { getDatabase, ref, onValue } from "firebase/database";
import { Card } from '../../components'


export default class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             barangs: {},
             barangsKey: []
        }
    }

    componentDidMount(){
        const db = getDatabase();
        const dbRef = ref(db, 'posts');
        
        onValue(dbRef, (snapshot) => {
        //   snapshot.forEach((childSnapshot) => {
        //     const childKey = childSnapshot.key;
        //     const childData = childSnapshot.val();
            
        //   });
        let data = snapshot.val() ?  snapshot.val() : {};
        let barangItem = {...data}
        this.setState({
            barangs:barangItem,
            barangsKey:Object.keys(barangItem)
        }) 
        }, {
          onlyOnce: true
        });
    }
    

    render() {
        // console.log("data = ", this.state.barangs)
        // console.log("data key = ", this.state.barangsKey)
        const {barangs,barangsKey} =  this.state
        return (
            
            <View style={styles.page}>
                
                <View style={styles.page} >
                    <View style={styles.header}>
                        <Text style={styles.title}>Daftar Barang</Text>
                        <View style={styles.garis} />
                    </View>

                    <View style={styles.listData} >
                        {barangsKey.length > 0 ? (
                            barangsKey.map((key) =>(
                                <Card id={key} barangsItem={barangs[key]} {...this.props} />
                            ))
                        ) : (
                            <Text> Daftar Kosong </Text>
                        )}
                    </View>
                </View>

                <View style={styles.wrapperButton} >
                    <TouchableOpacity style={styles.btnTambah} onPress={() => this.props.navigation.navigate('Tambah')}>
                        <FontAwesomeIcon icon={faPlus} size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header:{
        paddingHorizontal:30,
        paddingTop:30
    },

    garis:{
        borderWidth:1,
        marginTop:10
    },

    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    listData:{
        paddingHorizontal:30,
        marginTop:20
    }

})
