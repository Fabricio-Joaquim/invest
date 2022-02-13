/*eslint-disable*/

import React from 'react'
import * as S from './styled'
import Card from '../Card'
import {useGlobalContext} from '../../context'

const InfoGraphic = () => {

	const {Graphics} = useGlobalContext()
	console.log(Graphics,22)
	const item = [1,2,3,4,5,6]	
	return (
		<S.wrapper>
			<h3>
			Resultado da Simulação
			</h3>
			<S.Container>
					<Card titulo={"Valor Final Bruto"} valor={Graphics[0]?.valorFinalBruto}/>
					<Card titulo={"Aluiqutoa IR"} valor={Graphics[0]?.aliquotaIR}/>
					<Card titulo={"Valor Pago em IR"} valor={Graphics[0]?.valorPagoIR}/>
					<Card titulo={"Valor Final Liquido"} valor={Graphics[0]?.valorFinalLiquido}/>
					<Card titulo={"Valor Total Investido"} valor={Graphics[0]?.valorTotalInvestido}/>
					<Card titulo={"Ganho Liquido"} valor={Graphics[0]?.ganhoLiquido}/>
			</S.Container>
		</S.wrapper>
	)
}

export default InfoGraphic