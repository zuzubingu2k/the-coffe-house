
import React, { useState } from 'react'
import {
    View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, FlatList, Dimensions, ScrollView
} from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const w = Dimensions.get('screen').width

export default function cardOderList() {
    const dispatch = useDispatch();
    const productList = useSelector((store) => store.cardRoduce.products);
    const onChangeQuantity = (type, item) => () => {
        if (type === 'reduce' && item.quantity === 1) {
            dispatch({ type: 'REMOVE_ITEM', data: item })
        } else {
            dispatch({ type: 'CHANGE_QUANITY', data: item, changeQuantityType: type })
        }
    }
    const onRemoveItem = (item) => () => {
        dispatch({ type: 'REMOVE_ITEM', data: item })
    }
    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20, height: 150, width: '90%', backgroundColor: 'white' }}>
                <View>
                    <View style={{ margin: 10 }}>
                        <Image source={{ uri: item.image }} style={{ width: 120, height: 120, borderRadius: 10 }} />
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>{item.product_name}</Text>
                    <Text style={styles.title}>Giá: {item.base_price}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.textButton} onPress={onChangeQuantity('increase', item)}>
                            <Text style={styles.textSize}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.textSize}>{item?.quantity}</Text>
                        <TouchableOpacity onPress={onChangeQuantity('reduce', item)}>
                            <Text style={styles.textSize}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onRemoveItem(item)}>
                            <Icon style={styles.textSize} name="trash" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ height: windowHeight - 55, backgroundColor: '#FEF7E5' }}>
            {/* Header */}

            <FlatList
                data={productList}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            ></FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({


    title: {
        margin: 15,
    },
    textButton: {

    },
    textSize: {
        fontSize: 40,
        marginLeft: 20,
    }
})