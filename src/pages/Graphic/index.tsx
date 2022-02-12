import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis,
	VictoryTheme, VictoryStack } from 'victory'
import * as S from './styled'
const Graphic = () => {

	const data2012 = [
		{quarter: 1, earnings: 13000},
		{quarter: 2, earnings: 16500},
		{quarter: 3, earnings: 14250},
		{quarter: 4, earnings: 19000},
		{quarter: 5, earnings: 19000},
		{quarter: 6, earnings: 19000},
		{quarter: 7, earnings: 19000},
		{quarter: 8, earnings: 19000},]

	const data2013 = [
		{quarter: 1, earnings: 0},
		{quarter: 2, earnings: 0},
		{quarter: 3, earnings: 0},
	]
  
	const data2014 = [
		{quarter: 1, earnings: 0},
		{quarter: 2, earnings: 0},
		{quarter: 3, earnings: 0},
		{quarter: 4, earnings: 0}

	]
  
	const data2015 = [
		{quarter: 1, earnings: 18000},
		{quarter: 2, earnings: 13250},
		{quarter: 3, earnings: 15000},
		{quarter: 4, earnings: 12000}
	]
	return(
		<S.Wrapper>

			<VictoryChart
				height={500}
				width={700}
				domainPadding={10}
				theme={VictoryTheme.grayscale}

			>
				<VictoryAxis
					tickValues={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 5','Quarter 6','Quarter 7','Quarter 8', 'qwqwq']}
				/>
				<VictoryAxis
					dependentAxis
					
				/>
				<VictoryStack>
					<VictoryBar
						data={data2012}
						x={'quarter'}
						y={'earnings'}
					/>
					<VictoryBar
						data={data2013}
						x={'quarter'}
						y={'earnings'}
					/>
					<VictoryBar
						data={data2014}
						x={'quarter'}
						y={'earnings'}
					/>
					<VictoryBar
						data={data2015}
						x={'quarter'}
						y={'earnings'}
					/>
				</VictoryStack>
			</VictoryChart>		
		</S.Wrapper>
	)
}

export default Graphic
