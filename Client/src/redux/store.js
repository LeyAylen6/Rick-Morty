import { createStore } from "redux";
import { rootReducer } from './reducer.js'

export const store = createStore(rootReducer);