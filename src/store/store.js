import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { wikiReducer } from "./wiki/reducer"

export const store = createStore(wikiReducer, applyMiddleware(thunk))
