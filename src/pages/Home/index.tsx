import React from 'react'
import Form from '../Form'
import Graphic from '../Graphic'
import * as S from './styled'
export const Home = () => {
	return(
		<S.Wrapper>
			<S.header>Simulador de Investimentos</S.header>
			<Form/>
			<Graphic/>
		</S.Wrapper>
	)
}

export default Home