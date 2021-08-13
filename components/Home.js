import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
import Barcode from "react-native-barcode-builder";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

export default function Home() {
    const image = { uri: "https://thumbs.dreamstime.com/b/vector-card-design-hand-drawn-coffee-dessert-illustration-coffee-shop-cafe-template-decorative-background-frame-90033724.jpg" };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ height: 1300 }}>
                    <View style={styles.header}>
                        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <TouchableOpacity style={{ width: 50, height: 30, backgroundColor: 'white', left: 330, borderRadius: 10, top: 5 }}>
                                        <Icon style={{ textAlign: 'center', top: 5 }} name="list" size={20} color="#aaa" />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'white', left: 340, borderRadius: 10, top: 5 }}>
                                        <Icon style={{ textAlign: 'center', top: 5 }} name="bell" size={20} color="#aaa" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <Text style={{ marginTop: 90 }}>
                                    <Barcode value="Hello World" format="CODE128" />;
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.bannerShip}>
                        <View style={{ borderRightWidth: 0.5, flex: 1 }}>
                            <TouchableOpacity>
                                <Icon style={{ textAlign: 'center', top: 20 }} name="truck" size={40} color="pink" />
                                <Text style={{ textAlign: 'center', top: 15 }}>Giao hang</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Icon style={{ textAlign: 'center', top: 20 }} name="coffee" size={40} color="pink" />
                                <Text style={{ textAlign: 'center', top: 15 }}>Mang di</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bannerSlider}>
                        <Swiper style={{}} >
                            <View>
                                <Image
                                    style={styles.images}
                                    source={{
                                        uri: 'https://cdn-www.vinid.net/2020/03/20200316_AppVinID_BannerWeb_TCH_25-1024x576.jpg',
                                    }}
                                />
                            </View>
                            <View>
                                <Image
                                    style={styles.images}
                                    source={{
                                        uri: 'http://theme.hstatic.net/1000075078/1000610097/14/share_fb_rewards.png?v=684',
                                    }}
                                />
                            </View>
                            <View>
                                <Image
                                    style={styles.images}
                                    source={{
                                        uri: 'https://trungnguyenecoffee.com/wp-content/uploads/2021/03/1920x1080pxOnline.B%C3%A1nh-m%C3%AC-CTKM-T2.final_-1400x788.jpg',
                                    }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View flexDirection='row' style={{ marginTop: 80, left: 9 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Khám phá thêm</Text>
                        <Icon style={{ textAlign: 'center' }} name="star" size={20} color="yellow" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        width: '100%',
        height: 400,
        backgroundColor: '#f0dec5'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    card: {
        marginLeft: 9,
        width: '95%',
        height: 250,
        backgroundColor: '#be9345',
        marginTop: 60,
        alignItems: 'center',
        borderRadius: 20
    },
    bannerShip: {
        top: 15,
        marginLeft: 9,
        width: '95%',
        height: 100,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: "row"
    },
    bannerSlider: {
        top: 30,
        marginLeft: 9,
        width: '95%',
        height: 200,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: "row"
    },
    images: {
        height: 200,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: 6,
    }
})

