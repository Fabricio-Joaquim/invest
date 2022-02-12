/*eslint-disable*/
import React from 'react'
import {  RegisterOptions } from 'react-hook-form'
import {MInput} from './styled'

interface props{
 register: any,
 name:string,
 disable?: boolean,
 norequire?:boolean,
 mdefault?:string
}

export const Input = ({register, name, disable, norequire, mdefault}:props) => {
	const regex = /^[0-9]*$/

	return <>
		<MInput
		defaultValue={mdefault}
			disabled={disable}
		{...register(name, {
			required: norequire?false:'Campo obrigatório',
			validate: 
				{
					positive: (value:any) => regex.test(value) || norequire || 'Campo deve ser um número',
				} 
		})} 
		/>
	</>
}


export default Input