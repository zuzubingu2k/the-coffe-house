import axios from 'axios'
import { baseURL } from './config'

// khai bao instance = setup cho axios, base url
const instance = axios.create({
    baseURL: 'https://api.thecoffeehouse.com/api/',
    timeout: 40000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

// export const getProductList = () => axios.get('https://forever21.hungvu.net/get-products')
// export const getProductList = () => {
//   return instance.get('get-products')
// }

// https://forever21.hungvu.net/      get-products
// goi phuong thuc + phan duoi domain
//https://api.thecoffeehouse.com/api/verify_mobile
export const getProductList = () => instance.get('v2/menu')
export const getAllStores = () => instance.get('get_all_store')
export const login1 = (params) => instance.post('verify_mobile', params)