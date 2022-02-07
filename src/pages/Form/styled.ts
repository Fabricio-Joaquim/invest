import styled from 'styled-components'
interface props {
    lado?: string
}
export const Wrapper = styled.form`
    grid-area: Form;
    display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 0.6fr 1fr 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  margin-left: 50px;
  grid-template-areas: 
    "title title"
    "yield index"
    "initialAP endAP"
    "deadline profit"
    "ipca cdi"
    "resetf submit"; 
    `

export const Title = styled.h2`
    font-size: ${props => props.theme.fontSize.medium};
    grid-area: title;
`
export const Yield = styled.div`
    grid-area: yield;
    flex-direction: row;
    display: flex;    
    input{
        display: none;
        &:checked +label{
            background-color: ${props => props.theme.colors.secundary};
            color:white
        }
    }
`

export const Field = styled.label<props>`
        position: relative;
        color: black;
        font-size: 26px;
        text-align: center;
        height: 50px;
        width: 100px;
        display: block;
        cursor: pointer;
        border: 3px solid transparent;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: ${props => props.lado === 'esq' ? '10px 0 0 10px' : '0 10px 10px 0'};
`
const MainDiv = styled.section`
    display: flex;
    flex-direction:column;
`
export const InitialAP = styled(MainDiv)`
    grid-area: initialAP;
`
export const Deadline = styled(MainDiv)`
    grid-area: deadline;
`
export const IPCA = styled(MainDiv)`   
    grid-area:ipca ;
`

export const Reset = styled.div`    
    grid-area:resetf ;
`

export const Index = styled.div`    
    grid-area: index;
`

export const EndAP = styled.div`    
    grid-area: endAP;
`

export const Profit = styled.div`   
    grid-area: profit;
`

export const CDI = styled.div`  
    grid-area: cdi;
`

export const Submit = styled.div`   
    grid-area: submit;
`
