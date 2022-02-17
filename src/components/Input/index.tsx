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
   }interface props2{
	register: any,
	name:string,
	disable?: boolean,
	norequire?:boolean,
	mdefault:number
   }

export const Input = ({register, name, norequire}:props) => {

	const regex = /^[0-9]*$/
	return <>
		<MInput
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

export const PercentInput = ({register, name, disable, norequire, mdefault}:props2) => {

	const regex = /^[0-9]*$/
	const value = mdefault.toString()+"%"
	return <>
		<MInput
		/* defaultValue= {mdefault} */
			disabled={disable}
			value={value}
		{...register(name, {
			required: norequire?false:'Campo obrigatório',
			onChange: (e:any) => console.log(e) 		
/* 			validate: 
				{
					positive: (value:any) => regex.test(value) || norequire || 'Campo deve ser um número',
				}  */
		})} 
		/>
	</>
}
