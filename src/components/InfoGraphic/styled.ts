import styled from 'styled-components'


export const wrapper = styled.aside`
grid-area: Description;
    
    h3{
        font-size: ${props => props.theme.fontSize.medium};
        font-weight: bold;
 
        @media (max-width:800px) {
            margin-top:50px;
            justify-content: center;
            display:flex
        }
    }
`

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;        
`