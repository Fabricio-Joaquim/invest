import React from 'react'
import * as S from './styled'
import Card from '../Card'

const InfoGraphic = () => {
	const item = [1,2,3,4,5,6]	
	return (
		<S.wrapper>
			<h3>
			Resultado da Simulação
			</h3>
			<S.Container>
				{item.map(item =>
					<Card key={item}/>
				)}
			</S.Container>
		</S.wrapper>
	)
}

export default InfoGraphic