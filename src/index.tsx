import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Styled from './style/index'
import theme from './style/theme'
import {ThemeProvider} from 'styled-components'
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Styled/>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
