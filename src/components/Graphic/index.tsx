/*eslint-disable*/

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
import style from "../../style/theme"
import {useGlobalContext} from "../../context"

 
console.log(window.screen)
export default function App() {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)
	const {Graphics} = useGlobalContext()
	const labels = [1,'122','122','122','122' ,'February', 'March', 'April', 'May', 'June', 'July']

	const options = {
		plugins: {
			title: {
				display: true,
				text: 'Projecao de valores',
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
				label: 'Dataset 1',
				data: labels.map(() => [0,100]),
				backgroundColor: style.colors.primary,
		},{
			data: labels.map(() => [0,5]),
		},
	
			{
				label: 'Dataset 3',
				data: labels.map(() => [0,100]),
				backgroundColor: style.colors.secundary,
			},
		],
	}
console.log(Graphics,2221)

	return <Bar options={options} height={(window.screen.height/10)} data={data} />
}
