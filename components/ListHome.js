import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ListHome() {
    const DATA = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://ngocdenroi.com/wp-content/uploads/2015/09/the-coffee-house-1441102961552-crop-1441123481946.jpg',
            "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://bloganchoi.com/wp-content/uploads/2019/12/ha-dong.jpg',
            "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://file.hstatic.net/1000075078/file/1212-tch-p5_8ca0d2d9507a42c69fb5c8b3591d6787_1024x1024.jpg',
            "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://file.hstatic.net/1000075078/file/tch-hoang_dao_thuy_a04a726e631e44c8a6e513c1e7ab3afa_1024x1024.jpg',
            "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://cafebiz.cafebizcdn.vn/zoom/700_438/162123310254002176/2021/3/13/photo1615650312715-16156503159861438233881.jpg',
            "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
        },

    ]
    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: 'white', width: '90%', height: 130, marginLeft: 18, borderRadius: 15, marginBottom: 5 }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }}>
                <View style={styles.item}>
                    <Image
                        style={{ height: 90, width: 90, padding: 20, marginLeft: 10 }}
                        source={{
                            uri: item.image,
                        }}
                    />
                </View>
                <View style={{ marginLeft: 20, marginTop: 15 }}>
                    <Text>THE COFFE HOUSE</Text>
                    <Text style={{ width: 260, fontSize: 13 }}>{item.address}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
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
                        data={DATA}
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
})
