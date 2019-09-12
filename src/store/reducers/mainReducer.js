import types from "../actions/actionTypes";

import {log, consts} from '../../config/config';

// Posts state structure
const initialState = {
    showModal: false,

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