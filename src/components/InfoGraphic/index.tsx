/*eslint-disable*/
import React from 'react'
import * as S from './styled'
import Card from '../Card'
import {useGlobalContext} from '../../context'

const InfoGraphic = () => {

	const {Graphics} = useGlobalContext()
	return (
		<S.wrapper>
			<h3>
			Resultado da Simulação
			</h3>
			<S.Container>
				<Card titulo={'Valor Final Bruto'} value={Graphics[0]?.valorFinalBruto}/>
				<Card titulo={'Aluiqutoa IR'} percent value={Graphics[0]?.aliquotaIR}/>
				<Card titulo={'Valor Pago em IR'} value={Graphics[0]?.valorPagoIR}/>
				<Card titulo={'Valor Final Liquido'} green value={Graphics[0]?.valorFinalLiquido}/>
				<Card titulo={'Valor Total Investido'} value={Graphics[0]?.valorTotalInvestido}/>
				<Card titulo={'Ganho Liquido'} green value={Graphics[0]?.ganhoLiquido}/>
			</S.Container>
		</S.wrapper>
	)
}

export default InfoGraphic