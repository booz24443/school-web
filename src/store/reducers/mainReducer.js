import types from "../actions/actionTypes";

import {log, consts} from '../../config/config';

// Posts state structure
const initialState = {
    showModal: false,
    height: 0,
    width: 0,
    currentTab: consts.POSTS_TAB,

    posts: [],
    postField: '',
    postGrade: '',

    grades: [],
    fields: [],

    programs: [],
    media: [],
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


        case types.FETCH_PROGRAMS:

            return {
                ...state, // Rest Parameter
                customers: action.payload.customers,
                customerListVersion: action.payload.customerListVersion,
                customerSort: action.customerSort,
                customerStatus: action.customerStatus,
            };



        default:
            return state;
    }
}