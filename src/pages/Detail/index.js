import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { getDatabase, ref, onValue } from "firebase/database";
import { FIREBASE } from '../../config/Firebase';

export default class Detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             barang:{}
        }
    }

    componentDidMount(){
        const db = getDatabase(FIREBASE);
        const dbRef = ref(db, 'posts/'+this.props.route.params.id);
        
        onValue(dbRef, (snapshot) => {
        let data = snapshot.val() ?  snapshot.val() : {};
        let barangItem = {...data}
        this.setState({
            barang:barangItem,
        }) 
        }, {
          onlyOnce: true
        });
    }
    
    render() {
        const {barang} = this.state 
        return (
            <View style={styles.pages}>
                <Text>Kode Barang :</Text>
                <Text style={styles.text}>{barang.kd_brg} </Text>

                <Text>Nama Barang :</Text>
                <Text style={styles.text}>{barang.nm_brg} </Text>

                <Text>Satuan :</Text>
                <Text style={styles.text}>{barang.satuan} </Text>

                <Text>Harga Beli :</Text>
                <Text style={styles.text}>Rp. {barang.hrg_beli} </Text>

                <Text>Harga Jual :</Text>
                <Text style={styles.text}>Rp. {barang.hrg_jual} </Text>

                <Text>Stok Minimal :</Text>
                <Text style={styles.text}>{barang.stok_min} items</Text>

                <Text>Stok :</Text>
                <Text style={styles.text}>{barang.stok} items</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages:{
        padding:20,
        margin:30,
        backgroundColor:'white',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontSize:16,
        fontWeight:'bold',
        marginBottom:10,
        marginLeft:20
    }
})
