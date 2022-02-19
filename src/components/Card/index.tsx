import React from 'react'
import * as S from './styled'
interface props{
	titulo:string,
	value:number,
	green?:boolean
	percent?:boolean
}
const Card = ({titulo, value, green, percent}:props) => {
	const render = percent?{ style: 'percent'}:{ style: 'currency', currency: 'BRL' }
	const newValue = percent?(value/100):value
	return (
		<S.Wrapper green={green}>
			<span>{titulo}</span>
			<p>{new Intl.NumberFormat('pt-BR', render ).format(newValue)}</p>
		</S.Wrapper>
	)	
}

export default Card