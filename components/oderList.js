import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getProductList } from '../service/app'
import { getImage } from '../utils'
export default function oderList() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    // dispatch(getProduct({ page: 1, limit: 10 }));
    // getProductList()
    const callGetProductList = async () => {
      try {
        const response = await getProductList();
        console.log('rs', response.data.data); // data tu api tra ve
        setProduct(response.data.data)

      } catch (error) {
        console.error(error);
      }
    }

    callGetProductList()
  }, [])
  const onMoveToDetail = (data) => () => {
    navigation.navigate('Detail', { detail: data });
  }
  /*const DATA = [
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      image: 'https://ngocdenroi.com/wp-content/uploads/2015/09/the-coffee-house-1441102961552-crop-1441123481946.jpg',
      "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72ưewe',
      image: 'https://bloganchoi.com/wp-content/uploads/2019/12/ha-dong.jpg',
      "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7212cd',
      image: 'https://file.hstatic.net/1000075078/file/1212-tch-p5_8ca0d2d9507a42c69fb5c8b3591d6787_1024x1024.jpg',
      "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72sd3',
      image: 'https://file.hstatic.net/1000075078/file/tch-hoang_dao_thuy_a04a726e631e44c8a6e513c1e7ab3afa_1024x1024.jpg',
      "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72sad1',
      image: 'https://cafebiz.cafebizcdn.vn/zoom/700_438/162123310254002176/2021/3/13/photo1615650312715-16156503159861438233881.jpg',
      "address": ' 641 Phạm Văn Đồng ,Bắc Từ Liêm,Hà Nội',
    },

  ]
  */
  const renderItem = ({ item }) => (

    <View style={{ backgroundColor: 'white', width: '90%', height: 165, marginLeft: 18, borderRadius: 15, marginBottom: 10 }}>
      <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }}>
        <View style={{ marginLeft: 10, marginTop: 5, width: '65%' }}>
          <Text>{item.product_name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={{ height: 90, width: 90, padding: 20, marginLeft: 10 }}
            source={{ uri: item.image }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
  const [selectedValue, setSelectedValue] = useState("matcha");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', width: '95%', height: 35, marginLeft: 5, marginTop: 10 }}>
        <Picker style={styles.buttonSelect}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Ca phe" value="ca phe" color='black' />
          <Picker.Item label="Matcha" value="matcha" color='black' />
          <Picker.Item label="Ca phe goi" value="ca phe goi" color='black' />
          <Picker.Item label="Da xay" value="da xay" color='black' />
        </Picker>
        <TouchableOpacity style={styles.buttonIcon}>
          <Icon style={{ marginLeft: 3, marginTop: 10, textAlign: 'center' }} name="search" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon} >
          <Icon style={{ marginLeft: 3, marginTop: 10, textAlign: 'center' }} name="heart-o" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ height: 3000 }}>
          <Text style={{ fontSize: 18, padding: 20, marginTop: 10, fontWeight: 'bold' }}>Cafe goi, cafe uong lien</Text>
          <FlatList
            data={product}
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
    backgroundColor: "#d8d6d6",
    flex: 1,
  },
  buttonSelect: {
    width: '75%',
    backgroundColor: '#b5b8bf',
    borderRadius: 0,
    height: 0
  },
  buttonIcon: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 15,
    backgroundColor: '#8e96a0'
  }
})
