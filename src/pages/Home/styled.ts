import styled from 'styled-components'

export const Subcontainer = styled.div`
    display:grid;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.three};
    border-radius: 10px;
    grid-template-columns: .5fr 1fr; 
    grid-template-rows: .5fr 1fr 1fr; 
    gap: 0px 100px; 
    grid-template-areas: 
    "Header Header"
    "Form Graphic"
    "Form Graphic";
    @media (max-width:800px) {
      display:flex;
      flex-direction: column;
      height: 10%;
    }
`

export const Wrapper = styled.div`
  margin:20px;
  height:95vh;
`

export const Header = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    font-weight: 600;
    font-family: ${props => props.theme.fontFamily.Robo};
    font-size: ${props => props.theme.fontSize.large};
    grid-area: Header;
    @media (max-width:800px) {
      margin-bottom: 20px;
    }
    @media (max-width:320px) {
      margin-bottom: 10px;
      font-size: 10px;
    }
`