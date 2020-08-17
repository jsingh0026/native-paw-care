import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import PetSmallCard from './Pets/PetCards'
import Header from './Header'
import Events from './Events'
import Pets from './Pets'
import Nearby from './Nearby'

function Home() {
    return (
        <View style={styles.HomeContainer}>
            <Header />
            <Pets/>
            <Events/>
            <Nearby/>
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