import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Foundation } from '@expo/vector-icons';

function AddPet({path, pet}) {
    return (
        <View style={styles.container}>
            <View style={styles.addPetContainer}>
            <Foundation name="paw" size={54} color="coral" />
            </View>
            <Text style={styles.petName}>Add</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 104,
        marginRight: 10,
    },
    petName: {
        textAlign: "center",
        color:'coral',

    },
    addPetContainer: {
        shadowOpacity: 0.5,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        // padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'coral',
    },
    petImg: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: 'gray',
    }
})

export default AddPet
