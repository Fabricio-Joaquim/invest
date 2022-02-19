import React from 'react'
import * as S from './styled'
interface props {
    onClick?: () => void
    name: string,
    bg?: string,
    type?: 'submit'|'reset'|'button',
    disable?:boolean,
}

const Button = ({ onClick, name, bg, type, disable }: props) => {
	return <S.Button 
		type={type} bg={bg} onClick={onClick} disabled={disable}>{name}</S.Button>
}

export default Button
