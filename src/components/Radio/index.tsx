/*eslint-disable*/

import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import * as S from './styled'
type IProps = {
value:string,
name:string,
register:any,
left?:boolean,
right?:boolean
two?:boolean
}

const Radio = ({value,name,register, right, left, two}:IProps) => {
	return (
		<>
			<label>
				<S.Radio type="radio"  {...register(name, {
					required: 'Campo obrigatório'
				})}
				name={name}
				value={value}
				/>
				<S.Span two={two} left={left} right={right}>
					{value}
				</S.Span>   
			</label>
		</>

	)
}

export default Radio