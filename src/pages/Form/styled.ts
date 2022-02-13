import styled from 'styled-components'
interface props {
    lado?: string,
    error?:string

}

export const Wrapper = styled.form`
    grid-area: Form;
    display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 0.6fr 1fr 1fr 1fr 1fr 1fr; 
  gap: 0px 20px; 
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

export const Yield = styled.div<props>`
    grid-area: yield;
    flex-direction: column;
    display: flex;    
    color:${props => !props.error?'black':'red'};

    div{
        margin-top:10px
    }
`

export const InitialAP = styled(MainDiv)<props>`
    grid-area: initialAP;
    color:${props => !props.error?'black':'red'};

`
export const Deadline = styled(MainDiv)<props>`
    grid-area: deadline;
    color:${props => !props.error?'black':'red'};

`
export const IPCA = styled(MainDiv)`   
    grid-area:ipca ;

`

export const Reset = styled(MainDiv)`    
    grid-area:resetf;

`

export const Index = styled(MainDiv)<props>`    
    grid-area: index;
    color:${props => !props.error?'black':'red'};
    div{
        margin-top:10px
    }
`

export const EndAP = styled(MainDiv)<props>`    
    grid-area: endAP;
    color:${props => !props.error?'black':'red'};
`

export const Profit = styled(MainDiv)<props>`   
    grid-area: profit;
    color:${props => !props.error?'black':'red'};

`

export const CDI = styled(MainDiv)`  
    grid-area: cdi;
    display:flex;
    flex-direction:column;

`

export const Submit = styled(MainDiv)`   
    grid-area: submit;
    
`

