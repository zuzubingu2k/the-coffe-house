import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, Button, FlatList } from 'react-native'
import Barcode from "react-native-barcode-builder";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'

const DATA = [
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://vn-test-11.slatic.net/p/a7ecd9a18dabfc2105aeabc00bd457b8.jpg_800x800Q100.jpg',
        title2: 'One Shulder Cami Bodysuit',
        title3: '120$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://vuakhuyenmai.vn/wp-content/uploads/the-coffee-house-khuyen-mai-40off-2-7-2021.jpg',
        title2: 'Twist-Font Crop Top',
        title3: '55,99$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://stc.shopiness.vn/deal/2020/07/09/e/1/c/3/1594285314024_540.png',
        title2: 'Racerback Mock Neck',
        title3: '200$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://stc.shopiness.vn/deal/2021/03/17/8/3/7/7/1615964681763_540.png',
        title2: 'Racerback Mock Neck',
        title3: '200$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://feed.thecoffeehouse.com/content/images/2020/02/viber_image_2020-02-17_09-38-42.jpg',
        title2: 'Thất Tịch Có Đôi,Nhà Mời Một Nửa',
        title3: '200$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://file.hstatic.net/1000075078/file/giai_toi_dich_c87db2c6c7f44c43af7d5219b332fcf4_grande.jpg',
        title2: 'Ưu Đãi Tháng 8 Từ Nhà',
        title3: '200$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png',
        title2: 'Thất Tịch Có Đôi,Nhà Mời Một Nửa',
        title3: '200$',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: 'https://stc.shopiness.vn/deal/2021/03/17/8/3/7/7/1615964681763_540.png',
        title2: 'Thất Tịch Có Đôi,Nhà Mời Một Nửa',
        title3: '200$',
    },
]
export default function Home() {
    const image = { uri: "https://thumbs.dreamstime.com/b/vector-card-design-hand-drawn-coffee-dessert-illustration-coffee-shop-cafe-template-decorative-background-frame-90033724.jpg" };
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.item}>
                <Image
                    style={{ height: 200, width: 200 }}
                    source={{
                        uri: item.image,
                    }}
                />
                <View><Text style={styles.texttitle}>{item.title2}</Text></View>
                <View><Text style={styles.texttitle}>{item.title3}</Text></View>
            </View>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ height: 2000 }}>
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
                        <Icon style={{ textAlign: 'center' }} name="star" size={18} color="yellow" />
                    </View>
                    <View style={{ flexDirection: "row", top: 10, marginLeft: 10 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text>Ưu đãi đặc biệt</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text> Cập nhật từ nhà</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text>#coffelover</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ top: 50 }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}

                        />
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
    },
    buttonList: {
        borderWidth: 1, borderRadius: 20
    },
    item: {
        marginLeft: 5,
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    texttitle: {
        width: 150,
        marginLeft: 5,
    }
})

