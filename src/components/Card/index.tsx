import React from 'react'
import * as S from './styled'
interface props{
	titulo:string,
	valor:number
}
const Card = ({titulo, valor}:props) => {
	return (
		<S.Wrapper>
			<span>{titulo}</span>
			<p>{valor}</p>
		</S.Wrapper>
	)
}

export default Card