import * as types from "./types"

const initialState = {
	wikiData: {},
	fetchingError: "",
	inputText: "",
	loading: false,
}

export const wikiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_ALL_WIKI_DATA:
			return {
				...state,
				wikiData: action?.payload,
			}
		case types.FETCHING_ERROR:
			return {
				...state,
				fetchingError: action?.payload,
			}
		case types.INPUT_TEXT:
			return {
				...state,
				inputText: action?.payload,
			}
		case types.LOADING_DATA:
			return {
				...state,
				loading: action?.payload,
			}
		case types.RESET_ALL_VALUES:
			return {
				wikiData: {},
				fetchingError: "",
				inputText: "",
				loading: false,
			}
		default:
			return state
	}
}
