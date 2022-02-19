import styled from 'styled-components'

export const Wrapper = styled.div`
    grid-area: Graphic;
    display: grid; 
    grid-template-columns: 1fr; 
  grid-template-rows: .4fr 1.3fr 1.3fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Description"
    "RenderGraphic"
    "RenderGraphic"; 
`

export const GraphicRender = styled.div`
grid-area: RenderGraphic;
margin-right: 10px;
`
