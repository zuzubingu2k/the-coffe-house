const initialState = {
    token: ''
};

export default function authRoduce(state = initialState, action) {
    switch (action.type) {
        case "SEND_FROM_GIRL_FR":
            return {
                token: [...state.items, action.data]
            };
        default:
            return state;
    }
}
