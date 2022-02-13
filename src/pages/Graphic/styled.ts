import styled from 'styled-components'

export const Wrapper = styled.div`
    grid-area: Graphic;
    display: grid; 
    grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "description"
    "renderGraphic"; 
`

export const GraphicRender = styled.div`
grid-area: renderGraphic;
`
