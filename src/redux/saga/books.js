import { call, put, takeEvery } from "redux-saga/effects";

import * as Api from "../middleware/api";
import * as ActionTypes from "../actions";

function* getAllBooksSaga() {
  try {
    const result = yield call(Api.getAllBooks);
    yield put({ type: ActionTypes.ALL_BOOKS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: ActionTypes.ALL_BOOKS_FAILURE });
  }
}

function* addBookSaga(payload) {
  try {
    const result = yield call(Api.addBook, payload.book);
    yield put({ type: ActionTypes.BOOK_ADD_SUCCESS, payload: result });
    yield put({ type: ActionTypes.ALL_BOOKS_REQUEST });
  } catch (error) {
    yield put({ type: ActionTypes.BOOK_ADD_FAILURE });
  }
}

function* updateBookSaga(payload) {
  try {
    const result = yield call(Api.updateBook, payload.book);
    yield put({ type: ActionTypes.BOOK_UPDATE_SUCCESS, payload: result });
    yield put({ type: ActionTypes.ALL_BOOKS_REQUEST });
  } catch (error) {
    yield put({ type: ActionTypes.BOOK_UPDATE_FAILURE });
  }
}

export default function* booksSaga() {
  yield [
    yield takeEvery(ActionTypes.ALL_BOOKS_REQUEST, getAllBooksSaga),
    yield takeEvery(ActionTypes.BOOK_ADD_REQUEST, addBookSaga),
    yield takeEvery(ActionTypes.BOOK_UPDATE_REQUEST, updateBookSaga),
  ];
}
