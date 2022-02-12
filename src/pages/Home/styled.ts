import styled from 'styled-components'

export const Wrapper = styled.div`
    display:grid;
    height: 100vh;
    background-color: ${props => props.theme.colors.three};
    margin: 20px;
    border-radius: 10px;
    grid-template-columns: .5fr 1fr; 
  grid-template-rows: .5fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Header Header"
    "Form Graphic"
    "Form Graphic"; 
`

export const header = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    font-family: ${props => props.theme.fontFamily.Robo};
    font-size: ${props => props.theme.fontSize.large};
    grid-area: Header;
`