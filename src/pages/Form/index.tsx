import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as S from './styled'
type Inputs = {
    example: string,
    exampleRequired: string,
	rendimento:string
  };

export const Form = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
  
	console.log(watch('rendimento')) // watch input value by passing the name of it
  
	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<S.Title>Simulador</S.Title>
			<S.Yield>
				<S.Field lado={'esq'} htmlFor="option3">Free</S.Field>
				<input type="radio" id="option3" value="bruto" {...register('rendimento', { required: true })}/>
				<S.Field htmlFor="option2">Free</S.Field>
				<input type="radio" id='option2' value="liquido" {...register('rendimento')}/>
			</S.Yield>
			<S.Index>index</S.Index>
			<S.InitialAP>Aporte Inicial</S.InitialAP>
			<S.EndAP>Aporte Mensal</S.EndAP>
			<S.Deadline>Prazo (em meses)</S.Deadline>
			<S.Profit>Rentabilidade</S.Profit>
			<S.IPCA>IPCA(ao ano)</S.IPCA>
			<S.CDI>CDI</S.CDI>
			<S.Reset>Limpar Campos</S.Reset>
			<S.Submit>Simular</S.Submit>
			{/* 				
				<input defaultValue="test" disabled {...register('example')} />        
				<input {...register('exampleRequired', { required: true })} />
				{errors.exampleRequired && <span>This field is required</span>}
        
				<input type="submit" /> */}
		</S.Wrapper>
	)}

export default Form