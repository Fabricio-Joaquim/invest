import React from 'react'
import * as S from './styled'
interface props {
    onClick?: () => void
    name: string,
    bg?: string
    type?: 'submit'|'reset'|'button'
}

const Button = ({ onClick, name, bg, type }: props) => {
	return <S.Button 
		type={type} bg={bg} onClick={onClick}>{name}</S.Button>
}

export default Button
