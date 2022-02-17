import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import style from '../../style/theme'
import {useGlobalContext} from '../../context'

 
export default function App() {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)
	const {	NoAporte, Aporte } = useGlobalContext()
	const labels = NoAporte.map((_,index)=>index+1)

	const options = {
		plugins: {
			title: {
				display: true,
				text: 'Projeção de valores',
			},
		},
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
	}
	const data = {
		labels,
		datasets: [
			{
				label: 'Sem aporte',
				data: NoAporte.map((item) => [item]),
				backgroundColor: style.colors.primary,
			},	
			{
				label: 'Com aporte',
				data: Aporte.map((item) => [item]),
				backgroundColor: style.colors.secundary,
			},
		],
	}

	return <Bar options={options} height={(window.screen.height/10)} data={data} />
}
