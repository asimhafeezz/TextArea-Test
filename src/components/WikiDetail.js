import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

export const WikiDetail = () => {
	//redux store data
	const wikiData = useSelector(state => state.wikiData)
	const fetchingError = useSelector(state => state.fetchingError)
	const loading = useSelector(state => state.loading)

	//local states
	const [title, setTitle] = useState("")
	const [extract, setExtract] = useState("")

	useEffect(() => {
		if (wikiData?.query?.pages) {
			const wikiObject = Object.values(wikiData?.query?.pages)[0]
			if (wikiObject) {
				setTitle(wikiObject.title)
				setExtract(wikiObject.extract)
			}
		} else {
			setTitle("")
			setExtract("")
		}
	}, [wikiData])

	if (loading) {
		return (
			<LoadingContainer>
				<p>loading data...</p>
			</LoadingContainer>
		)
	}

	if (fetchingError) {
		return (
			<ErrorContainer>
				<p>{fetchingError}</p>
			</ErrorContainer>
		)
	}

	return (
		<Container>
			<h2>Wiki Details</h2>
			{title && (
				<>
					<h3>Title: {title}</h3>
					<p>Description: {extract}</p>
				</>
			)}
		</Container>
	)
}

//styled components
const Container = styled.section`
	margin: 25px;
	padding: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	border-radius: 10px;
	background-color: #f5f5f5;
	h2 {
		margin-bottom: 10px;
	}
`

const ErrorContainer = styled.section`
	margin: 25px;
	padding: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	border-radius: 10px;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		color: #962525;
	}
`

const LoadingContainer = styled.section`
	margin: 25px;
	padding: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	border-radius: 10px;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
`
