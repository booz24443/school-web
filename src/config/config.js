import React, { Component }  from 'react'; // just to be able to use functions in other components

export const isDevelopment = (process.env.NODE_ENV === 'development');


export const baseAddress = '/api/';
export const imagesAddress = '/images/';


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
