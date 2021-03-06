import styled from 'styled-components'
type props = {
    bg?: string
}

export const Button = styled.button<props>`    
    background-color: ${props => props.bg ? props.bg : props.theme.colors.secundary};
    width: 100%;
    height:50%;
    border-radius: 10px;
    border: ${props => props.bg ? '2px solid black' : 'none'};
    cursor:pointer;
    font-size: ${props => props.theme.fontSize.medium};
    font-family: Roboto-Bold;
    font-weight: lighter;
    :hover{
        background-color: ${props => props.theme.colors.primary};
        color:white
    }
    font-size: ${props => props.theme.fontSize.small};
    font-weight: 800;
    @media (max-width:1280px) {
        height: 50%;
    }
    @media (max-width:800px) {
        height: 100%;
    }
`
