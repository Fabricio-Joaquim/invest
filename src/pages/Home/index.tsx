import React from 'react'
import Form from '../Form'
import Graphic from '../Graphic'
import * as S from './styled'
export const Home = () => {
	return(
		<S.Wrapper>
			<S.Subcontainer>
				<S.Header>Simulador de Investimentos</S.Header>
				<Form/>
				<Graphic/>
			</S.Subcontainer>
		</S.Wrapper>
	)
}

export default Home