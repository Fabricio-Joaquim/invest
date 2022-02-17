/*eslint-disable*/

import React, { createContext, useContext, useState, useEffect, useCallback, SetStateAction } from 'react'
import request from '../services/request'
import { IContext, IGraphic, IBase } from './types'

export const Context = createContext<IContext>({ Data: [], Graphics: [],NoAporte:[],Aporte:[]  })

export const ContextProvider = (props: any) => {
	const [Render, setRender] = useState(false)
	const changeGraphic = () => setRender(!Render)
	const [Data, setData] = useState<string[]>([])
	const [Graphics, setGraphics] = useState<IGraphic[]>([])
	const [Aporte, setAporte] = useState([])
	const [NoAporte, setNoAporte] = useState([])

	const call = useCallback(
		async () => {
			const value = (await request.indicator())
			setData(value)
		},
		[])
	useEffect(() => {
		call()
	}, [Render])

	async function getRender(Base: IBase) {
		const index = Base.index.toLowerCase()
		const rendimento = Base.rendimento.toLowerCase()
		const value: any = await request.filter(index, rendimento)
		setGraphics(value)
		getListGraphic(value[0].graficoValores.comAporte,setAporte)
		getListGraphic(value[0].graficoValores.semAporte,setNoAporte)
	}

	function getListGraphic(myObject:any, set:any){
		let aux: number[]= []
		for(var i in myObject){
			aux.push(myObject[i])
		}
		set(aux);
	}

	return (
		<Context.Provider value={{
			Data,
			Render,
			Graphics,
			NoAporte,
			Aporte,
			changeGraphic,
			getRender
		}}>
			{props.children}
		</Context.Provider>
	)
}

export const useGlobalContext = () => useContext(Context)