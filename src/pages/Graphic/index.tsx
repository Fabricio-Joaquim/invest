import React from 'react'
import * as S from './styled'
import InfoGraphic from '../../components/InfoGraphic'
const Graphic = () => {
	return (
		<S.Wrapper>
			<InfoGraphic/>
			<S.GraphicRender>
				Graphic
			</S.GraphicRender>
		</S.Wrapper>
	)
}

export default Graphic