import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Alert } from 'react-native'
import { TextInput } from '../../components'
import { getDatabase, ref, set,onValue, update } from "firebase/database";
import { FIREBASE } from '../../config/Firebase';


export default class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kd_brg: "",
            nm_brg: "",
            satuan: "",
            hrg_beli: "",
            hrg_jual: "",
            stok: "",
            stok_min: ""
        }
    }

    componentDidMount(){
        const db = getDatabase(FIREBASE);
        const dbRef = ref(db, 'posts/'+this.props.route.params.id);
        
        onValue(dbRef, (snapshot) => {
        let data = snapshot.val() ?  snapshot.val() : {};
        let barangItem = {...data}
        this.setState({
            kd_brg:barangItem.kd_brg,
            nm_brg:barangItem.nm_brg,
            satuan:barangItem.satuan,
            hrg_beli:barangItem.hrg_beli,
            hrg_jual:barangItem.hrg_jual,
            stok:barangItem.stok,
            stok_min:barangItem.stok_min
        }) 
        }, {
          onlyOnce: true
        });
    }

    OnChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }

    OnSubmit = () => {
        if (this.state.kd_brg && this.state.nm_brg && this.state.satuan && this.state.hrg_beli && this.state.hrg_jual && this.state.stok && this.state.stok_min) {
            console.log("data masuk on submit")
            console.log(this.state)
            const db = getDatabase(FIREBASE)
            const postListRef =  ref(db, 'posts/'+this.props.route.params.id);
            // const newPostRef = update(postListRef);
            update(postListRef, {
                    kd_brg: this.state.kd_brg,
                    nm_brg: this.state.nm_brg,
                    satuan: this.state.satuan,
                    hrg_beli: this.state.hrg_beli,
                    hrg_jual: this.state.hrg_jual,
                    stok: this.state.stok,
                    stok_min: this.state.stok_min
            }).then((data) => {
                Alert.alert("Success","Success Edit Data");
                this.props.navigation.replace('Home');
            })
            .catch((error) => {
                console.log("Error :" ,error)
            });

        } else {
            Alert.alert("Error", "Data wajib diisi !")
        }
    }

    
    render() {
        return (
            <ScrollView>
                <View style={styles.pages}>
                    <TextInput
                        label="Kode Barang"
                        placeholder="Masukkan Kode Barang"
                        OnChangeText={this.OnChangeText}
                        value={this.state.kd_brg}
                        namaState="kd_brg"
                    />

                    <TextInput
                        label="Nama Barang"
                        placeholder="Masukkan Nama Barang"
                        OnChangeText={this.OnChangeText}
                        value={this.state.nm_brg}
                        namaState="nm_brg"
                    />

                    <TextInput
                        label="Satuan"
                        placeholder="Masukkan Satuan Barang"
                        OnChangeText={this.OnChangeText}
                        value={this.state.satuan}
                        namaState="satuan"
                    />

                    <TextInput
                        label="Harga Beli"
                        placeholder="Masukkan Harga Beli"
                        type='numeric'
                        OnChangeText={this.OnChangeText}
                        value={this.state.hrg_beli}
                        namaState="hrg_beli"
                    />

                    <TextInput
                        label="Harga Jual"
                        placeholder="Masukkan Harga Jual"
                        type='numeric'
                        OnChangeText={this.OnChangeText}
                        value={this.state.hrg_jual}
                        namaState="hrg_jual"
                    />

                    <TextInput
                        label="Stok "
                        placeholder="Masukkan Stok "
                        type='numeric'
                        OnChangeText={this.OnChangeText}
                        value={this.state.stok}
                        namaState="stok"
                    />

                    <TextInput
                        label="Stok Minimal"
                        placeholder="Masukkan Stok Minimal"
                        type='numeric'
                        OnChangeText={this.OnChangeText}
                        value={this.state.stok_min}
                        namaState="stok_min"
                    />

                    <TouchableOpacity style={styles.btnSubmit} onPress={() => this.OnSubmit()}>
                        <Text style={styles.textBtn}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    },
    btnSubmit: {
        backgroundColor: "#ff8f17",
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textBtn: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }


})
