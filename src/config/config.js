import React, { Component }  from 'react'; // just to be able to use functions in other components

export const isDevelopment = (process.env.NODE_ENV === 'development');



export const baseAddress = '/broadcast_app_server/public/api/';
export const imagesAddress = '/images/';


export const URLS = {

    ROUTE_POST_LIST: baseAddress + '1/posts/html/10/0/null/null/null',

    ROUTE_BASE_GET_POSTS: baseAddress + '1/posts/' + 'html/10/0/null/null/null',
};

export const consts = {
    MEDIAS_TAB: 'mediaTab',
    PROGRAMS_TAB: 'programsTab',
    POSTS_TAB: 'postTab',


    PROGRAM_FILTER_MODAL: 'PROGRAM_FILTER_MODAL',

    POST:'html',
    MEDIA:'media',
    PROGRAM:'program',

    CHUNK_COUNT: 10,


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
