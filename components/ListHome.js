import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ListHome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
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
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên đường,quận.."
                    placeholderTextColor="#a1a8b0"
                />
                <TouchableOpacity>
                    <Icon style={{ textAlign: 'center', top: 5 }} name="list" size={20} color="#aaa" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },
})
