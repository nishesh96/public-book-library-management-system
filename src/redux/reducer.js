import * as ActionTypes from "./actions";

const initialState = {
  isFetching: false,
  items: [],
  error: false,
  message: null,
};

const books = (state = initialState, action) => {
  //console.log('action.type', action.type);

  switch (action.type) {
    case ActionTypes.ALL_BOOKS_REQUEST:
    case ActionTypes.BOOK_ADD_REQUEST:
    case ActionTypes.BOOK_UPDATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.ALL_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };
    case ActionTypes.ALL_BOOKS_FAILURE:
    case ActionTypes.BOOK_ADD_FAILURE:
    case ActionTypes.BOOK_UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case ActionTypes.BOOK_ADD_SUCCESS:
    case ActionTypes.BOOK_UPDATE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: false,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};

export default books;
