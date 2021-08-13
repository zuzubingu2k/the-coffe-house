import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import Logo from './Logo'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.Logo}
                    source={{
                        uri: 'https://dotea.vn/data/upload/Tin%20tuc/thuong-thuc-tra-dao-voi-banh-bong-lan-kem.jpg',
                    }}
                />
            </View>
            <View>
                <Text style={{ textAlign: 'center', marginTop: 30 }}>Chào mừng bạn đến với</Text>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 23 }}>THE COFFEE HOUSE</Text>
            </View>

            <TextInput
                style={styles.textInput}
                textAlign='center'
                placeholder="Nhập số điện thoại"
                placeholderTextColor="#a1a8b0"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Đăng nhập </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 70 }}>
                <View style={styles.horizontalLine}></View>
                <View>
                    <Text style={{
                        paddingHorizontal: 10, textAlign: 'center'
                    }}>Hoặc</Text>
                </View>
                <View style={styles.horizontalLine}></View>
            </View>
            <TouchableOpacity style={styles.buttonLoginFb}>
                <Text style={styles.textButton}>Tiếp tục bằng Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLoginGg}>
                <View>
                    <Text style={styles.textButtonGg}>Tiếp tục bằng Google</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    Logo: {
        width: '100%',
        height: 300,
    },
    textInput: {
        borderColor: 'black', borderWidth: 0.5, borderRadius: 10,
        width: '90%', height: 40, fontSize: 12
        , marginLeft: 18, marginTop: 30, color: 'black',
    },
    button: {
        borderColor: 'black', borderWidth: 0.5, borderRadius: 10,
        width: '90%', height: 40, fontSize: 12
        , marginLeft: 18, marginTop: 20, backgroundColor: '#878383'
    },
    textButton: {
        marginTop: 8,
        textAlign: "center",
        color: 'white'
    },
    horizontalLine: {
        borderBottomColor: '#a1a8b0', borderBottomWidth: 0.5, flex: 1
    },
    buttonLoginFb: {
        borderColor: 'black', borderWidth: 0.5, borderRadius: 10,
        width: '90%', height: 40, fontSize: 12
        , marginLeft: 18, marginTop: 30, backgroundColor: '#3770b7'
    },
    buttonLoginGg: {
        borderColor: 'black', borderWidth: 0.5, borderRadius: 10,
        width: '90%', height: 40, fontSize: 12
        , marginLeft: 18, marginTop: 30, backgroundColor: 'white'
    },
    textButtonGg: {
        marginTop: 8,
        textAlign: "center",
        color: 'black'
    },
})
