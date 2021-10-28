const initialState = {
    products: []
};

export default function cardRoduce(state = initialState, action) {
    switch (action.type) {
        case "ADD_CART":
            console.log(action.data)
            const isExit = state.products?.find(e => e._id === action.data?._id)
            const productList = isExit ? state.products.map(e => {
                if (e._id === action.data._id) {
                    return { ...e, quantity: e.quantity + 1 }
                }
                else return e
            }) : [...state.products, action.data]
            // ? { ...action.data, quantity: action.data.quantity + 1 } : action.data
            return {
                products: productList
            };
        case 'CHANGE_QUANITY':
            const isReduce = action.changeQuantityType === 'reduce'
            const productChangeQuantity =
                state.products.map(e => {
                    if (e._id === action.data._id) {
                        return { ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }
                    }
                    else return e
                })
            return {
                ...state,
                products: productChangeQuantity
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                products: state.products?.filter(e => e?._id !== action.data?._id)
            }
        default:
            return state;
    }
}
// case "ADD_CART":
    //   console.log(action.data)
    //   const isExist = state.products?.find(e => e._id === action.data?._id) // neu khong co sp thi kq se la undefined
    //   // const productList = isExist
    //   //   ? state.products?.map(e => {
    //   //     if (e._id === action.data._id) {
    //   //       return { ...e, quantity: e.quantity + 1 }
    //   //     } else return e
    //   //   })
    //   //   : [...state.products, action.data] // sp chua co trong list, thi add moi vao

    //   const productList = isExist
    //     ? state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: e.quantity + 1 }) : e)
    //     : [...state.products, action.data] // sp chua co trong list, thi add moi vao

    //   return {
    //     products: productList
    //   };