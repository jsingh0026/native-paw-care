import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'

import { EventsData } from '../../../data'

function Events() {
    return (
        <View style={styles.eventsCardContainer}>
            <View style={styles.eventHeader}>
                <Text style={styles.eventHeading}>Upcoming Events</Text>
            </View>
            <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                {EventsData.map(event => (
                    <View style={[styles.card,
                    {backgroundColor:'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'}]} key={event.id}>
                        <Text style={styles.cardHead}>{event.title}</Text>
                        <View style={styles.cardContent}>
                            <Image style={styles.eventImages} source={require('../../../assets/BirthdayCake.png')}/>
                            <Text style={styles.contentText}>
                                {event.Descprition}
                            </Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Image style={styles.eventImages} source={require('../../../assets/Calendar.png')} />
                            <Text style={styles.contentText}>
                                {event.date}
                            </Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Image style={styles.eventImages} source={require('../../../assets/Clock1.png')}/>
                            <Text style={styles.contentText}>
                                {event.time}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    eventsCardContainer: {
        padding: 5,
        marginTop: 5
    },
    eventHeader: {
        // borderWidth: 1,
        borderColor: 'lightblue',
        marginBottom: 10
    },
    eventHeading: {
        fontSize: 20
    },
    card: {
        width: 200,
        // height: 150,
        // borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        justifyContent: "center",
        backgroundColor: 'lightblue',
        marginRight: 7
    },
    cardHead: {
        // borderWidth: 1,
        // flex: 1,
        borderColor: 'lightblue',
        // padding: 5,
        textAlign: "center",
        fontSize: 18,
        paddingBottom: 10,
        color: 'white',
        fontWeight: "bold"
    },
    cardContent: {
        // flex: 1,
        padding: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        // borderWidth: 2,
        borderColor: 'red',
        marginBottom: 5
    },
    contentText: {
        fontSize: 15,
        paddingLeft: 5,
        color: 'white'
    },
    eventImages:{
        width: 18,
        height: 18
    }
})

export default Events
