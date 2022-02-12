import React from 'react'
import {Input,Label, Main} from './styled'

const CheckBox = ({left,name}:any) => {
	return (
		<Main>
			<Input  type="button" name="buton" value ="1"/>
			<Label htmlFor="buton" left={left}>{name}</Label>
		</Main>
	
	)
}

export default CheckBox