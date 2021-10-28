import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAllStores } from '../service/app'
const renderItem = ({ item }) => {
    return (
        <View style={{ backgroundColor: 'white', width: '95%', height: 130, marginLeft: 12, borderRadius: 15, marginBottom: 5 }}>
            <TouchableOpacity style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }}>
                <Image source={{ uri: item.image_1 }} style={styles.itemImg} />
                <View style={styles.itemContent}>
                    <Text style={styles.itemHeading}>THE COFFEE HOUSE</Text>
                    <Text style={styles.itemText}>{item.address.full_address}</Text>
                    <Text style={styles.itemText}>cách đây {item.distance} km</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default function ShopScreen() {
    const [stores, getStores] = useState([])

    useEffect(() => {
        const callGetStores = async () => {
            try {
                const response = await getAllStores();
                // data tu api tra ve
                getStores(response.data)

            } catch (error) {
                console.error(error);
            }
        }

        callGetStores()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cửa Hàng</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <TouchableOpacity style={{ width: 50, height: 30, left: 200, borderRadius: 10, top: 5, borderColor: 'black', borderWidth: 1 }}>
                            <Icon style={{ textAlign: 'center', top: 5 }} name="list" size={20} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 30, height: 30, left: 220, borderRadius: 7, top: 5, borderColor: 'black', borderWidth: 1 }}>
                            <Icon style={{ textAlign: 'center', top: 5 }} name="bell" size={20} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên đường,quận.."
                    placeholderTextColor="black"
                />
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
                    <Icon style={{ textAlign: 'center', top: 5 }} name="list" size={20} color="#aaa" />
                    <Text style={{ marginLeft: 10 }}>Bản đồ</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{ height: 1500, backgroundColor: '#ddd' }}>
                    <View style={{ marginLeft: 20, marginTop: 30, height: 40 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Các cửa hàng khác</Text>
                    </View>
                    <FlatList
                        data={stores}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={1}

                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    input: {
        color: 'black',
        borderRadius: 10,
        width: "70%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#d8d6d6'
    },
    itemImg: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    itemContent: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: "space-between",
        marginLeft: 10
    },
    itemImg: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    itemHeading: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#C8C8C8'
    },
    itemText: {
        fontSize: 14
    }
})
