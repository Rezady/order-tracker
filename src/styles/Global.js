import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

	html {
		font-size: 100%;
	}

	body {
		margin: 0;
		padding: 50px;
		overflow-x: hidden;
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1rem;
		background-color: #FFFAE6;
		line-height: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		padding: 0;
		margin: 0;
	},
	#root {
		min-height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`