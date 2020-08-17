import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import PetCards from './PetCards'
import AddPetButton from './AddPetButton'

import { PetsData } from '../../../data'

function AddPet() {
    return (
        <View style={styles.petCardContainer}>
            <View style={styles.petHeader}>
                <Text style={styles.heading}>My Pets</Text>
            </View>
            <ScrollView style={styles.scrollContainer} horizontal={true}>
                {PetsData.map(pet => (<PetCards key={pet.id} path={pet.imgSrc} pet={pet} />))}
                <AddPetButton />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 10,
    },
    petHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 10,
        padding: 5
    },
    heading: {
        fontSize: 20
    },
})

export default AddPet
