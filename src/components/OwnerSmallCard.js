import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

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
