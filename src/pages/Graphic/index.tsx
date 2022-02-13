import React from 'react'
import * as S from './styled'
import InfoGraphic from '../../components/InfoGraphic'
import Graphics from '../../components/Graphic'
import {useGlobalContext} from '../../context'

const Graphic = () => {
	const {Render} = useGlobalContext()
	return (
		<S.Wrapper>
			{Render && <>
				<InfoGraphic/>
				<S.GraphicRender>
					<Graphics/>
				</S.GraphicRender>
			</>}
		</S.Wrapper>
	)
}

export default Graphic