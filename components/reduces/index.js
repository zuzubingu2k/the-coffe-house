import { combineReducers } from "redux";
import cardRoduce from "./cardRoduce";
import authRoduce from "./authRoduce";
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
    cardRoduce,
    authRoduce
    // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
