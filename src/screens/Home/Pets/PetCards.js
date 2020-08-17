import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

function PetCards({path, pet}) {
    return (
        <View style={styles.container}>
            <View style={styles.petContainer}>
                <Image
                    style={{
                        resizeMode: "cover",
                        height: 100,
                        width: 100,
                        borderRadius: 20
                    }}
                    source={path}
                />
            </View>
            <Text style={styles.petName}>{pet.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 104,
        marginRight: 10
    },
    petName: {
        textAlign: "center",
        color:'gray'
    },
    petContainer: {
        shadowOpacity: 0.5,
        // width: 110,
        // height: 110,
        // alignItems: "center",
        // padding: 10,
        borderRadius: 20
    },
    petImg: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: 'gray',
    }
})

export default PetCards
