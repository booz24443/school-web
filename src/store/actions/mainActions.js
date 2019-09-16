import types from "./actionTypes";
import {baseAddress, log, postRequest, URLS, consts} from "../../config/config";


export const handleSize= (w, h) => dispatch => {
    dispatch({
        type: types.HANDLE_SIZE,
        width: w,
        height: h,
    });
};

export const handleTab = (arg) => dispatch => {
    dispatch({
        type: types.HANDLE_TAB,
        payload: arg,
    });
};

export const handleLogged = (arg) => dispatch => {
    dispatch({
        type: types.LOGGED,
        payload: arg
    });
};

export const handleModal = (arg) => dispatch => {
    dispatch({
        type: types.HANDLE_MODAL,
        payload: arg
    });
};

