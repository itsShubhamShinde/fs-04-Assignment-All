import { legacy_createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import reducer from './Reducer';

const myStore = legacy_createStore(reducer,applyMiddleware(logger));

export default myStore;