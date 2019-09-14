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

// export const fetchCustomers = function( ) {
//
//     return function (dispatch) {
//
//         postRequest(URLS.ROUTE_GET_CUSTOMERS, {sort: sortBy, state: status}, (res, statusCode) => {
//
//             dispatch({
//                 type: actionType,
//                 payload: res,
//                 customerSort: sortBy,
//                 customerStatus: status,
//             })
//         });
//     }
// };
//
// export const fetchOrders = () => dispatch => {
//
//     let dateToSend = (date === consts.SELECT_DATE)? undefined: date; // send date if selected
//
//     postRequest(URLS.ROUTE_GET_ORDERS, {sort: sortBy, state: status, date: dateToSend}, (res, statusCode) => {
//
//         if (checkStatusCode(dispatch, statusCode) !== true) return;
//
//         dispatch({
//             type: actionType,
//             payload: res,
//             orderSort: sortBy,
//             orderStatus: status,
//             orderDate: date,
//         })
//     });
// };
