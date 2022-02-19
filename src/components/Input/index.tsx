import React from 'react'
import { Percent, NInput} from './styled'

interface props{
	register: any,
	name:string,
	disable?: boolean,
	norequire?:boolean,
	mdefault?:string,
	number?:boolean,
   }interface props2{
	register: any,
	name:string,
	disable?: boolean,
	norequire?:boolean,
	mdefault:number
	watch?:any
   }

export const Input = ({register, name}:props) => {
	const verify = { locale: 'pt-BR', currency: 'BRL' }
	const regex = /^[0-9]*$/
	return <NInput
		intlConfig={verify}
		form={name}
		{...register(name, {
			required:	'Campo obrigatório',
			validate:
			{
				positive: (value:any) => regex.test(value) || 'Campo deve ser um número',
			} 
		})} 
	/>
}

export const Numbers = ({register, name}:any) => {

	return (<>
		<NInput
			form={name}
			type="text"
			maxLength={3}
			{...register(name, {
				required:'Campo obrigatório',

			})} 
		/>
	</>)
}

export const Static = ({register, name, disable, norequire, mdefault}:props2) => {

	const value = mdefault.toString()+'%'
	return (<>
		<NInput
			form={name}
			disabled={disable}
			value={value}
			type="text"
			{...register(name, {
				required: norequire?false:'Campo obrigatório',

			})} 
		/>
	</>)
}

export const PercentInput = ({register, name}:props2) => {
	return (<>
		<Percent
			form={name}
			type="text"
			maxLength={3}
			suffix="%"
			{...register(name, {
				required:'Campo obrigatório',
			})} 
		/>
	</>)
}