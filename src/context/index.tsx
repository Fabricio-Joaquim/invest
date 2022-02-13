/*eslint-disable*/

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import request from '../services/request'
import { IContext, IGraphic, IBase } from './types'

export const Context = createContext<IContext>({ Data: [], Graphics: [] })

export const ContextProvider = (props: any) => {
	const [Render, setRender] = useState(false)
	const changeGraphic = () => setRender(!Render)
	const [Data, setData] = useState<string[]>([])
	const [Graphics, setGraphics] = useState<IGraphic[]>([])
	const call = useCallback(
		async () => {
			const value = (await request.indicator())
			setData(value)
		},
		[])
	useEffect(() => {
		call()
	}, [])

	async function getRender(Base: IBase) {
		const index = Base.index.toLowerCase()
		const rendimento = Base.rendimento.toLowerCase()
		const value: any = await request.filter(index, rendimento)
		setGraphics(value)
	}
	console.log(Graphics)
	return (
		<Context.Provider value={{
			Data,
			Render,
			Graphics,
			changeGraphic,
			getRender
		}}>
			{props.children}
		</Context.Provider>
	)
}

export const useGlobalContext = () => useContext(Context)