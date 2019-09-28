import types from "./actionTypes";
import {baseAddress, log, postRequest, URLS, consts, getRequest} from "../../config/config";


export const handleSize = (w, h) => dispatch => {
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

export const handlePageNumber = (pageType, number) => dispatch => {
    dispatch({
        type: types.HAND,
        pageType: pageType,
        pageNumber: number
    });
};

export const handlePosts = (type, chunkCount, pageCount) => dispatch => {

    // getRequest(URLS.ROUTE_BASE_GET_POSTS + type + '/' + chunkCount + '/' + pageCount + '/null/null/null', (res) => {
    //
    //     if (res[consts.RESULT_CODE] === consts.SUCCESS_CODE) {
    //
    //         dispatch({
    //             type: types.HANDLE_POSTS,
    //             payload: res,
    //             pageCount: pageCount
    //         });
    //     }
    // });

};

