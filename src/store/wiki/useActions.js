import * as types from "./types"
import { useDispatch } from "react-redux"
import axios from "axios"

export const useWikiActions = () => {
	const dispatch = useDispatch()

	//actions creators
	const fetchWikiData = payload => ({
		type: types.FETCH_ALL_WIKI_DATA,
		payload: payload,
	})

	const fetchingError = payload => ({
		type: types.FETCHING_ERROR,
		payload: payload,
	})

	const loadingData = payload => ({
		type: types.LOADING_DATA,
		payload: payload,
	})

	//fetch single coin detail
	const fetchWikiDataByPhrase = phrase => {
		//loadin state
		dispatch(loadingData(true))
		//fetch
		axios
			.get(
				`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&origin=*&titles=${phrase}`
			)
			.then(res => {
				dispatch(fetchWikiData(res?.data))
				console.log("data from api", { res })
				//loadin state
				dispatch(loadingData(false))
			})
			.catch(err => {
				console.log("error from api", { err })
				dispatch(loadingData(false))
				dispatch(fetchingError(err.message))
			})
	}

	const setInputText = text => {
		dispatch({
			type: types.INPUT_TEXT,
			payload: text,
		})
	}

	const resetAllValues = () => {
		dispatch({
			type: types.RESET_ALL_VALUES,
		})
	}

	return {
		fetchWikiDataByPhrase,
		setInputText,
		resetAllValues,
	}
}
