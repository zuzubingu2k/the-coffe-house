import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.Logo}
                source={{
                    uri: 'https://brasol.vn/public/uploads/1571294450-logo-the-coffee-house.jpg',
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    Logo: {
        width: '100%',
        height: 200,
        marginTop: 300,
    }
})