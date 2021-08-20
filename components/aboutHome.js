import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function aboutHome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'white', height: 60 }}>
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
            </View>
            <Text style={{ fontSize: 20, fontWeight: '50', marginLeft: 20, marginTop: 10 }}>Tiện Ích</Text>
            <View style={{ height: 90, backgroundColor: 'white', width: '96%', borderRadius: 3, marginLeft: 8, marginTop: 10 }}>
                <TouchableOpacity style={{ marginLeft: 15, marginTop: 10 }}>
                    <Icon style={{}} name="file" size={20} color="pink" />
                    <Text style={{ marginTop: 20 }}>Lich su don hang</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 90, backgroundColor: 'white', width: '45%', borderRadius: 3, marginLeft: 8, marginTop: 10 }}>
                    <TouchableOpacity style={{ marginLeft: 15, marginTop: 10 }}>
                        <Icon style={{}} name="music" size={20} color="#53c072" />
                        <Text style={{ marginTop: 20 }}>Nhạc đang phát</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 90, backgroundColor: 'white', width: '48%', borderRadius: 3, marginLeft: 8, marginTop: 10 }}>
                    <TouchableOpacity style={{ marginLeft: 15, marginTop: 10 }}>
                        <Icon style={{}} name="folder" size={20} color="#92b6f3" />
                        <Text style={{ marginTop: 20 }}>Điều khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '50', marginLeft: 20, marginTop: 20 }}>Hỗ Trợ</Text>
            <View style={{ height: 110, backgroundColor: 'white', width: '96%', borderRadius: 3, marginLeft: 8, marginTop: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, padding: 5 }}>
                    <Icon style={{ marginRight: 5 }} name="star" size={20} color="#92b6f3" />
                    <Text style={{ fontSize: 15 }}>Đánh giá từ khách hàng</Text>
                </TouchableOpacity>
                <View style={{ borderBottomColor: '#d8d6d6', borderBottomWidth: 1, marginTop: 20, marginLeft: 20, width: '90%' }}>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 18, padding: 5 }}>
                    <Icon style={{ marginRight: 5 }} name="wechat" size={20} color="#92b6f3" />
                    <Text style={{ fontSize: 15 }}>Liên hệ và góp ý</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '50', marginLeft: 20, marginTop: 20 }}>Tài Khoản</Text>
            <View style={{ height: 110, backgroundColor: 'white', width: '96%', borderRadius: 3, marginLeft: 8, marginTop: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, padding: 5 }}>
                    <Icon style={{ marginRight: 5 }} name="star" size={20} color="#92b6f3" />
                    <Text style={{ fontSize: 15 }}>Thông tin cá nhân</Text>
                </TouchableOpacity>
                <View style={{ borderBottomColor: '#d8d6d6', borderBottomWidth: 1, marginTop: 20, marginLeft: 20, width: '90%' }}>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 18, padding: 5 }}>
                    <Icon style={{ marginRight: 5 }} name="wechat" size={20} color="#92b6f3" />
                    <Text style={{ fontSize: 15 }}>Địa chỉ đã lưu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 110, backgroundColor: 'white', width: '96%', borderRadius: 3, marginLeft: 8, marginTop: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, padding: 5 }}>
                    <Icon style={{ marginRight: 5 }} name="gear" size={20} color="#92b6f3" />
                    <Text style={{ fontSize: 15 }}>Cài đặt</Text>
                </TouchableOpacity>
                <View style={{ borderBottomColor: '#d8d6d6', borderBottomWidth: 1, marginTop: 20, marginLeft: 20, width: '90%' }}>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 18, padding: 5 }}>
                    <Icon style={{ marginRight: 5 }} name="unlock" size={20} color="#92b6f3" />
                    <Text style={{ fontSize: 15 }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d8d6d6',
        flex: 1,
    },
})
