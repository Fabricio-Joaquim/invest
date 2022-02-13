/*eslint-disable*/
import { useForm, SubmitHandler } from 'react-hook-form'
import * as S from './styled'
import Button from "../../components/Button"
import Input from "../../components/Input"
import Errorr from '../../components/Error'
import Radio from "../../components/Radio"
import {useGlobalContext} from "../../context/"
type Inputs = {
	cdi: string,
	deadline: string,
	endAP: string,
	initialAP: string,
	ipca: string,
	profit: string,
	rendimento: string,
	index: string
};
export const Form = () => {
	const {Data, changeGraphic, getRender} = useGlobalContext()
	const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>({ })
	const onSubmit: SubmitHandler<Inputs> = data => {
		getRender(data)
		changeGraphic();}
	const clickReset = () => {reset(); isSubmitSuccessful&&changeGraphic()}
	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<S.Title>Simulador</S.Title>
			<S.Yield error={errors.rendimento?.message}>
				Rendimento
				<div>
					<Radio name='rendimento' register={register} two left value="Bruto" />
					<Radio name='rendimento' register={register} two right value="Liquido" />
				</div>
				<Errorr error={errors.rendimento} message={errors.rendimento?.message} />
			</S.Yield>
			<S.Index error={errors.index?.message}>
				Tipo de Indexação
				<div>
					<Radio name='index' register={register} left value="PRE" />
					<Radio name='index' register={register} value="POS" />
					<Radio name='index' register={register} right value="IPCA" />
				</div>
				<Errorr error={errors.index} message={errors.index?.message} />
			</S.Index>
			<S.InitialAP error={errors.initialAP?.message}>
				Aporte Inicial
				<Input register={register} name="initialAP" />
				<Errorr error={errors.initialAP} message={errors.initialAP?.message} />
			</S.InitialAP>
			<S.EndAP error={errors.endAP?.message}>
				Aporte Mensal
				<Input register={register} name="endAP" />
				<Errorr error={errors.endAP} message={errors.endAP?.message} />

			</S.EndAP>
			<S.Deadline error={errors.deadline?.message}>
				Prazo (em meses)
				<Input register={register} name="deadline" />
				<Errorr error={errors.deadline} message={errors.deadline?.message} />
			</S.Deadline>
			<S.Profit error={errors.profit?.message}>
				Rentabilidade
				<Input register={register} name="profit" />
				<Errorr error={errors.profit} message={errors.profit?.message} />
			</S.Profit>
			<S.IPCA>
				IPCA(ao ano)
				<Input
					register={register}
					name="ipca"
					disable
					norequire
					mdefault={Data[0]}
				/>
				<Errorr error={errors.deadline} message={errors.ipca?.message} />
			</S.IPCA>
			<S.CDI>
				CDI
				<Input register={register} name="cdi" disable norequire mdefault={Data[1]} />
				<Errorr error={errors.cdi} message={errors.cdi?.message} />
			</S.CDI>
			<S.Reset>
				<Button name='Limpar Campos' bg='white' onClick={clickReset} type="reset" />
			</S.Reset>
			<S.Submit>
				<Button name='Simular' type="submit" />
			</S.Submit>
		</S.Wrapper>
	)
}

export default Form