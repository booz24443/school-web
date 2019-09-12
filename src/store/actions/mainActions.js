import types from "./actionTypes";
import {baseAddress, log, postRequest, URLS, consts} from "../../config/config";


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

// export const fetchCustomers = function(skipCount, sortBy, status) {
//
//     return function (dispatch) {
//
//         postRequest(URLS.ROUTE_GET_CUSTOMERS, {skip: skipCount, sort: sortBy, state: status}, (res, statusCode) => {
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
// export const fetchOrders = (skipCount, sortBy, status, date) => dispatch => {
//
//     let dateToSend = (date === consts.SELECT_DATE)? undefined: date; // send date if selected
//
//     postRequest(URLS.ROUTE_GET_ORDERS, {skip: skipCount, sort: sortBy, state: status, date: dateToSend}, (res, statusCode) => {
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
