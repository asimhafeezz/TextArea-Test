import styled from "styled-components"
import { MarkedInput, Result, WikiDetail } from "../components"
import { useWikiActions } from "../store/wiki/useActions"

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	height: 60vh;
`

const Title = styled.div`
	font-size: 25px;
	font-weight: 700;
	font-family: "Lato", sans-serif;
	margin-bottom: 1em;
`

const EditorContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

const Button = styled.button`
	padding: 10px 20px;
	border: 0;
	background-color: #af4040;
	color: #fff;
	font-size: 14px;
	border-radius: 5px;
	margin: 10px 0;
	&:hover {
		background-color: #d84848;
		cursor: pointer;
	}
`

export default function App() {
	//use wiki actions
	const { resetAllValues } = useWikiActions()

	return (
		<>
			<AppContainer>
				<Title>Markdown Editor</Title>
				<EditorContainer>
					<MarkedInput />
					<Result />
				</EditorContainer>
				<Button onClick={resetAllValues}>Reset</Button>
			</AppContainer>
			<WikiDetail />
		</>
	)
}
