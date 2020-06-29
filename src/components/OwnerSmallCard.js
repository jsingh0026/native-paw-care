import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Foundation } from '@expo/vector-icons';

function OwnerSmallCard() {
    return (
        <View style={styles.Container}>
            <Image
                style={{
                    resizeMode: "cover",
                    height: 50,
                    width: 50,
                    borderRadius: 100
                }}
                source={require('../assets/person.png')}
            />
            <Text style={styles.userName}>Hello, Owner!</Text>
            <Text style={{color:'coral', fontSize: 20, padding: 5}}>Add</Text><Foundation name="paw" size={24} color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems:"center"
    },
    userName: {
        flex:1,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10
    },
    addPet:{
        flex:1,
        textAlign: "right",
    }
})

export default OwnerSmallCard
