import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import Logo from './Logo'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { login1 } from '../service/app'
import Modal from "react-native-modal";
const { height, width } = Dimensions.get('window')
export default function Login() {
    const [phone, setPhone] = useState('0936027304')
    const [code, setCode] = useState()
    const [isVisible, setIsVisible] = useState(false)

    console.log('height', height)

    const onChangePhone = (val) => setPhone(val)
    const onChangeCode = (val) => setCode(val)

    const onCloseModal = () => setIsVisible(false)

    const onVerifyPhone = async () => {
        try {
            const response = await login1({ phone: phone });
            console.log('rs', response.data); // data tu api tra ve
            setIsVisible(true) // // hien thi modal nhap code len
        } catch (error) {
            console.error(error.response);
        }
    }

    const onVerifyCode = async () => {
        try {
            const response = await login1({ phone: phone, otp: code });
            console.log('rs', response.data); // data tu api tra ve
            setIsVisible(false) // an modal nhap code di
            // save lai token

        } catch (error) {
            console.error(error.response);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ height: 1000 }}>

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
                    <View>
                        <TextInput
                            style={styles.textInput}
                            textAlign='center'
                            placeholder="Nhập số điện thoại"
                            placeholderTextColor="#a1a8b0"
                            keyboardType="numeric"
                            onChangeText={onChangePhone}
                            value={phone}
                        />
                        <TouchableOpacity
                            onPress={onVerifyPhone}
                            style={styles.button}>
                            <Text style={styles.textButton}>Đăng nhập </Text>
                        </TouchableOpacity>
                        <Modal
                            testID={'modal'}
                            isVisible={isVisible}
                            onSwipeComplete={onCloseModal}
                            swipeDirection={['up', 'left', 'right', 'down']}
                            style={{ justifyContent: 'flex-end', margin: 0, }}>
                            <View style={styles.content}>
                                <TouchableOpacity style={styles.closeBtn} onPress={onCloseModal}>
                                    <Ionicons name="close" size={30} color="black" />
                                </TouchableOpacity>
                                <Text>Nhập mã..... sdt {phone}</Text>
                                <TextInput
                                    style={{ height: 45, borderWidth: 1, borderRadius: 5, marginTop: 20, width: '100%', color: 'red' }}
                                    onChangeText={onChangeCode}
                                    value={code}
                                />
                                <TouchableOpacity
                                    onPress={onVerifyCode}
                                    style={{ marginTop: 20, borderWidth: 1, borderRadius: 5, padding: 15, width: '100%', backgroundColor: 'grey' }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Send Code</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
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
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: height - 50
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10
    }
})
