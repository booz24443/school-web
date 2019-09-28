import types from "../actions/actionTypes";

import {log, consts} from '../../config/config';

// Posts state structure
const initialState = {
    showModal: false,
    height: 0,
    width: 0,


    grades: [],
    fields: [],

    currentTab: consts.POSTS_TAB,

    programPageNumber: 0,
    postPageNumber: 0,
    mediaPageNumber: 0,

    posts: [],
    postField: '',
    postGrade: '',

    programs: [],
    medias: [],

};

export default function (state = initialState, action) {

    switch (action.type) {

        case types.HANDLE_SIZE:

            return {
                ...state,
                width: action.width,
                height: action.height,
            };

        case types.HANDLE_TAB:

            return {
                ...state,
                currentTab: action.payload,
            };

        case types.LOGGED:

            return {
                ...state,
                logged: action.payload
            };

        case types.HANDLE_MODAL:

            return {
                ...state,
                showModal: (action.payload === undefined || action.payload === '')? true: action.payload
            };

        case types.HANDLE_POSTS:

            let listName;
            let pageType;

            if (action.type === consts.POST) {
                listName = 'posts';
                pageType = 'postPageNumber'

            } else if (action.type === consts.PROGRAM) {
                listName = 'programs';
                pageType = 'programPageNumber'

            } else if (action.type === consts.MEDIA) {
                listName = 'medias';
                pageType = 'mediaPageNumber'
            }

            return {
                ...state,
                [listName]: action.payload,
                [pageType]: action.pageCount
            };


        default:
            return state;
    }
}