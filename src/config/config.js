import React, { Component }  from 'react'; // just to be able to use functions in other components

export const isDevelopment = (process.env.NODE_ENV === 'development');

// export const baseAddress = isDevelopment ? 'http://127.0.0.1:4050/api/' : 'http://admin.overrider.ir/api/';
export const baseAddress = '/api/';
export const imagesAddress = '/images/';
export const websocketUrl = `ws://${baseAddress}`;

export const publicKey = 'BF4D-KmyDcU7oHjSfw3RnphdyQ50MjIuI3ZdRUNasrFQkthZqgwr7I-Z3OuRS2VgyP2Oumx-1PnK_3dsXWDgA9k';

export const URLS = {
    ROUTE_AUTHENTICATE: baseAddress + 'admin' + '/authenticate',
    ROUTE_REGISTER_SERVICE_WORKER: baseAddress + 'admin' + '/register-sw',
    ROUTE_CHECK_TOKEN: baseAddress + 'admin' + '/checkToken',
    ROUTE_ACCEPT_ORDER_STATUS: baseAddress + 'admin' + '/get-accept-order',

};

export const consts = {

    MEDIAS_TAB: 'mediaTab',
    PROGRAMS_TAB: 'programsTab',
    POSTS_TAB: 'postTab',

    SORTBAR_SORT_BY: 'به ترتیب :',
    SORTBAR_STATUS: 'وضعیت :',
    SORTBAR_LABEL: 'دسته :',

    LATEST: 'جدیدترین',
    HIGHEST_SUM: 'بالاترین مبلغ',

    HIGHEST_INVITES: 'بالاترین دعوت',
    HIGHEST_ORDERS: 'بالاترین سفارش',

    AVAILABLE: 'موجود',
    NOT_AVAILABLE: 'ناموجود',

    ALL: 'همه',
    DELIVERED: 'تحویل شده',
    REJECTED: 'لغو شده',

    VALID: 'معتبر',
    BORN_TODAY: 'متولد امروز',
    BANNED: 'مسدود شده',

    SELECT_DATE: 'انتخاب روز',
    SUGGESTED: 'پیشنهادی',

    FOOD_GROUPS: 'دسته های غذایی',

    DAY: 'to',
    OVERALL: 'ov',

    TRUE: 'TRUE',
    FALSE: 'FALSE',
    OFF: 'OFF',
    ON: 'ON',

    ADD_FOOD: 'ADD_FOOD',
    EDIT_FOOD: 'EDIT_FOOD',
    DELETE_FOOD: 'DELETE_FOOD',

    CODE_CHECKED: 'Checked Token :)',


    ORDER_MODAL: 'ORDM',
    CUSTOMER_MODAL: 'CSTM',
    DISCOUNT_MODAL: 'DSCM',
    ADD_FOOD_MODAL: 'FDM',
    EDIT_FOOD_MODAL: 'EFDM',
    FOOD_GROUP_DISCOUNT_MODAL: 'FGDM',
    LABELS_MODAL: 'LBDM',
    MEALS_MODAL: 'LBDMADS',
    CONFIRM_MODAL: 'CONFIRM_MODAL',
    CHANGE_PASSWORD_MODAL: 'CHANGE_PASSWORD_MODAL',
    FLEX_MODAL: 'FLEX_MODAL',
    MAP_MODAL: 'MAP_MODAL',
    COURIER_MODAL: 'COURIER_MODAL',


    FOOD_NAME_MAX_LENGTH: 25,
    FOOD_DES_MAX_LENGTH: 85,
    FOOD_PRICE_MAX_LENGTH: 6,
    FOOD_DISCOUNT_MAX_LENGTH: 2,
    COURIER_PRICE_MAX_LENGTH: 4,


    SUCCESS_CODE: 200,
    NO_CONTENT_CODE: 205,
    BAD_REQ_CODE: 400,
    UNAUTHORIZED_CODE: 401,
    NOT_FOUND_CODE: 404,
    INT_ERR_CODE: 500
};

export const log = function(message) {
    if (isDevelopment)
        console.log(message);
};

export async function postRequest(url, params, callback) {

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        // body must be at least an empty object , otherwise we have remove headers config

        // must define this header when sending json data (in POST req of course)
        headers: {
            'Content-Type': 'application/json'
        },
        // credentials: 'include', // Must specify this if you need to send cookies anyway
    });

    let statusCode = response.status;

    let data = await response.json().catch(err => {/*log(err)*/}); // if response body was empty, we must catch the reject(err)

    callback(data, statusCode);
}
