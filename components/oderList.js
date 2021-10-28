import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getProductList } from '../service/app'
import oderProductList from './oderProductList';
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
export default function oderList() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const onCloseModal = () => setIsVisible(false)
  const onAddToCard = (item) => () => {
    dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
  }

  useEffect(() => {
    // dispatch(getProduct({ page: 1, limit: 10 }));
    // getProductList()
    const callGetProductList = async () => {
      try {
        const response = await getProductList();

        setProduct(response.data.data)
      } catch (error) {
        console.error(error);
      }

    }

    callGetProductList()
  }, [])

  const onaddCard = () => { }
  const renderItem = ({ item }) => {

    return (
      <View>
        <View style={{ backgroundColor: 'white', width: '90%', height: 165, marginLeft: 18, borderRadius: 15, marginBottom: 10 }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15 }} onPress={onAddToCard(item)}>
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
      </View >
    )
  }
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
      <View>
        <ScrollView>
          <View style={{ height: 1000 }}>
            <Text style={{ fontSize: 18, padding: 20, marginTop: 10, fontWeight: 'bold' }}>Cafe goi, cafe uong lien</Text>
            <FlatList
              data={product}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={1}

            />
            <Modal
              testID={'modal'}
              isVisible={isVisible}
              onSwipeComplete={() => setIsVisible(false)}
              swipeDirection={['up', 'left', 'right', 'down']}
              style={styles.view}>
              <View style={styles.content}>
                <TouchableOpacity style={styles.btnclose} onPress={onCloseModal}>
                  <Ionicons name="close" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }}>
                  <View>
                    <Text>
                      Remove all
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Text>Nothing here!</Text>
                </View>

              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
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
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 750
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  btnclose: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
})
