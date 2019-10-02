import React, { Component }  from 'react'; // just to be able to use functions in other components

export const isDevelopment = (process.env.NODE_ENV === 'development');



export const baseAddress = '/broadcast_app_server/public/api/';
export const imagesAddress = '/images/';


export const URLS = {

};

export const consts = {

    PROGRAM_FILTER_MODAL: 'PROGRAM_FILTER_MODAL',
    LOGIN_MODAL: 'LOGIN_MODAL',

    POST:'html',
    MEDIA:'media',
    PROGRAM:'program',

    CHUNK_COUNT: 10,

    MOBILE_VIEW_WIDTH: 480,


    RESULT_CODE:'result_code',

    SUCCESS_CODE: 1000,

};

export const log = function(message) {
    if (isDevelopment)
        console.log(message);
};

export async function getRequest(url, callback) {

    let response = await fetch(url, {
        method: 'GET',
    });

    let statusCode = response.status;

    let data = await response.json().catch(err => {log(err)});

    callback(data, statusCode);
}

export async function postRequest(url, params, callback) {

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        // body must be at least an empty object , otherwise we have to remove headers config

        headers: {
            'Content-Type': 'application/json'
        },
    });

    let statusCode = response.status;

    let data = await response.json().catch(err => {log(err)});

    callback(data, statusCode);
}
