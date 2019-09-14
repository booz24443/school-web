import React, { Component }  from 'react'; // just to be able to use functions in other components

export const isDevelopment = (process.env.NODE_ENV === 'development');

// export const baseAddress = isDevelopment ? 'http://127.0.0.1:4050/api/' : 'http://admin.overrider.ir/api/';
export const baseAddress = '/api/';
export const imagesAddress = '/images/';

// export const publicKey = 'BF4D-KmyDcU7oHjSfw3RnphdyQ50MjIuI3ZdRUNasrFQkthZqgwr7I-Z3OuRS2VgyP2Oumx-1PnK_3dsXWDgA9k';

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


    PROGRAM_FILTER_MODAL: 'PROGRAM_FILTER_MODAL',


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

        headers: {
            'Content-Type': 'application/json'
        },
    });

    let statusCode = response.status;

    let data = await response.json().catch(err => {log(err)});

    callback(data, statusCode);
}
