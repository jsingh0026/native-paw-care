import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Events() {
    const Events = [
        {
        title: "Upcoming Birthday",
        Descprition: "Laika turns 5 coming friday",
        date: "July 3rd, 2020",
        time: "12:00 A.M."
        },
        {
            title: "Vet appointment",
            Descprition: "Tom's vet appointmet due tommorow",
            date: "Jule 30th, 2020",
            time: "02:00 P.M."
        }
    ]
    return (
        <View style={styles.eventsCardContainer}>
                <View style={styles.eventHeader}>
                <Text style={styles.eventHeading}>Upcoming Events</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardHead}>{Events[0].title}</Text>
                    <Text style={styles.cardContent}>
                    <FontAwesome name="birthday-cake" size={20} color="black" />{Events[0].Descprition}
                    </Text>
                    <Text style={styles.cardContent}>
                    <MaterialCommunityIcons name="calendar" size={20} color="black" />{Events[0].date}
                    </Text>
                    <Text style={styles.cardContent}>
                    <MaterialCommunityIcons name="clock" size={20} color="black" />{Events[0].time}
                    </Text>
                </View>
                {/* <ScrollView style={styles.scrollContainer} horizontal={true}>
                    
                </ScrollView> */}
            </View>
    )
}
const styles = StyleSheet.create({
    eventsCardContainer:{
        borderWidth: 1,
        borderColor: 'lightblue',
        padding: 5
    },
    eventHeader:{
        borderWidth: 1,
        borderColor: 'lightblue',
        marginBottom: 10
    },
    eventHeading:{
        fontSize: 20
    },
    card:{
        width: 200,
        height: 150,
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 15,
        padding: 10,
        justifyContent: "center"
    },
    cardHead:{
        borderWidth: 1,
        borderColor: 'lightblue',
    },
    cardContent:{
        borderWidth: 1,
        borderColor: 'lightblue',
        justifyContent: "center",
        fontSize: 16,
        
    }
})

export default Events
