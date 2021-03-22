import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import booksReducer from './reducer';
import booksSaga from './saga/books'


const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {

  const store = createStore(
    booksReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(booksSaga)

  if (module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(require('./reducer')))
  }
  return store;
}

const initialState = {
  isLoading: false,
  items: []
}

const store = configureStore(initialState);

export default store;