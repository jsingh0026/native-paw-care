import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'

import { EventsData } from '../../data'

function Events() {
    return (
        <View style={styles.eventsCardContainer}>
            <View style={styles.eventHeader}>
                <Text style={styles.eventHeading}>Upcoming Events</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.date}>
                        <Text style={{ textAlign: "center" }}>
                            <Text style={{ fontWeight: '300', color: 'red' }}>August</Text>{"\n"}<Text style={{ fontSize: 36, fontWeight: '100' }}>17</Text>
                        </Text>
                    </View>
                    <View style={{ width: 120, padding: 10 }}>
                        <View style={{}}>
                            <Text style={{color: '#3F4089', fontWeight: 'bold'}}>Doctor's Appointment</Text>
                        </View>
                        <View style={styles.cardContent}>
                            {/* <Image style={styles.eventImages} source={require('../../assets/Clock1.png')} /> */}
                            <Text style={styles.contentText}>
                                01:00 PM
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", padding: 20, position: "relative" }}>
                        <View style={{ position: 'absolute', zIndex: 100, left: -10 }}>
                            <Image
                                style={{
                                    resizeMode: "cover",
                                    height: 35,
                                    width: 35,
                                    borderRadius: 15,
                                    borderColor: 'gray',
                                    borderWidth: 1
                                }}
                                source={require('../../assets/dog.jpg')}
                            />
                        </View>
                        <View style={{position: 'absolute', zIndex: 50, left: 10}}>
                            <Image
                                style={{
                                    resizeMode: "cover",
                                    height: 35,
                                    width: 35,
                                    borderRadius: 15,
                                    borderColor: 'gray',
                                    borderWidth: 1.5
                                }}
                                source={require('../../assets/cat.jpg')}
                            />
                        </View>
                        <View style={{right:-13, borderRadius: 20, backgroundColor: 'lightgray'}}>
                            <Text
                                style={{
                                    resizeMode: "cover",
                                    height: 34,
                                    width: 34,
                                    borderRadius: 15,
                                    borderColor: 'white',
                                    borderWidth: 1,
                                    borderWidth:1.5,
                                    borderColor: 'gray',
                                    textAlign: "center",
                                    padding: 6,
                                    paddingLeft: 10
                                }}
                            >
                                2+
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    date: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 5,
        width: 70,
        justifyContent: "center"
    },
    cardContainer: {
        flexDirection: "row",
        height: 90,
        shadowOpacity: 0.1
    },
    eventsCardContainer: {
        padding: 15,
        marginTop: 150
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
        // width: 200, 
        // height: 100,
        // borderWidth: 1,
        marginBottom: 10,
        borderRadius: 15,
        // padding: 15,
        paddingLeft: 0,
        justifyContent: "center",
        backgroundColor: 'lightblue',
        marginRight: 7,
        flexDirection: "row"
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
        // padding: 2,
        // flexDirection: "row",
        // alignItems: "flex-start",
        // borderWidth: 2,
        // borderColor: 'red',
        marginTop: 5
    },
    contentText: {
        // fontSize: 15,
        // paddingLeft: 5,
        // color: 'white'
        fontWeight: "300",
        letterSpacing: 0.5
    },
    eventImages: {
        width: 15,
        height: 15
    }
})

export default Events