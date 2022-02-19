import styled from 'styled-components'

export const Label = styled.label`
`
interface ISpan{
  left?: boolean
  right?:boolean
  two?:boolean
}

export const Span = styled.span<ISpan>`
  display: inline-block;
  padding-top: ${props =>props.two?'20px':'20px'};
  padding-bottom: ${props =>props.two?'20px':'20px'};
  width: ${props =>props.two?'50%':'33%'};
  text-align: center;
  text-transform: capitalize;
  border: 2px solid black;
  border-top-left-radius: ${props => props.left?'15px':'0px'};
  border-bottom-left-radius: ${props => props.left?'15px':'0px'};
  border-top-right-radius: ${props => props.right?'15px':'0px'};
  border-bottom-right-radius: ${props => props.right?'15px':'0px'};
  color: black;
`

export const Radio = styled.input`
  display: none;

  :checked + ${Span} {
  background-color: ${props => props.theme.colors.secundary};
  color: white;
  border: 2px solid black;
}

`

