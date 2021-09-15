import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { useSelector } from "react-redux"
import { useWikiActions } from "../store/wiki/useActions"

const Container = styled.div`
	width: 50%;
	height: 100%;
	padding: 13px;
	font-family: "Lato", sans-serif;
`

const Title = styled.div`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 1em;
	padding: 8px 0;
	border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`

const ResultArea = styled.div`
	width: 100%;
	height: 100%;
	border: none;
	font-size: 17px;
`

export const Result = () => {
	//redux store value
	const inputText = useSelector(state => state.inputText)

	//useWikiHandler
	const { fetchWikiDataByPhrase } = useWikiActions()

	const handleMouseUp = () => {
		const phrase = window.getSelection().toString()
		if (phrase.length > 0) {
			fetchWikiDataByPhrase(phrase)
		}
	}

	return (
		<Container>
			<Title>Converted Text</Title>
			<ResultArea onMouseUp={handleMouseUp}>
				<ReactMarkdown children={inputText}></ReactMarkdown>
			</ResultArea>
		</Container>
	)
}
