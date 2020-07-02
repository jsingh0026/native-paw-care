import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import PetSmallCard from '../components/PetSmallCard'
import OwnerSmallCard from '../components/OwnerSmallCard'
import Events from '../components/Events'
import AddPet from '../components/AddPet'

function Home() {
    const pets = [
        {id: 1, name: "Laika", imgSrc:require('../assets/dog.jpg')},
        {id: 2, name: "Tom", imgSrc:require('../assets/cat.jpg')},
    ]
    return (
        <View style={styles.HomeContainer}>
            <OwnerSmallCard />
            <View style={styles.petCardContainer}>
                <View style={styles.petHeader}>
                <Text style={styles.heading}>My Pets</Text>
                </View>
                <ScrollView style={styles.scrollContainer} horizontal={true}>
                    {pets.map(pet=>(<PetSmallCard key={pet.id} path = {pet.imgSrc} pet={pet}/>))}
                    <AddPet/>
                </ScrollView>
            </View>
            <Events/>
        </View>
    )
}

const styles = StyleSheet.create({
    HomeContainer:{
        padding: 5,
        marginTop: 50,
        // borderWidth: 1,
        // borderColor: 'lightblue'
    },
    scrollContainer:{
        padding: 10,
    },
    petHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 20,
        padding: 5
    },
    heading:{
        fontSize: 20
    },
    user:{
        padding: 10,
        fontSize: 20
    }
})

export default Home
