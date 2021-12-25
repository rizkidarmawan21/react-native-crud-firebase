import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { getDatabase, ref, onValue } from "firebase/database";

export default class Detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             barang:{}
        }
    }

    componentDidMount(){
        const db = getDatabase();
        const dbRef = ref(db, 'posts/'+this.props.route.params.id);
        
        onValue(dbRef, (snapshot) => {
        //   snapshot.forEach((childSnapshot) => {
        //     const childKey = childSnapshot.key;
        //     const childData = childSnapshot.val();
            
        //   });
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
            <View>
                <Text> Detail Barang {barang.nm_brg} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
