import styled from 'styled-components'


export const wrapper = styled.aside`
grid-area: description;
    
    h3{
        font-size: ${props => props.theme.fontSize.medium};
        font-weight: bold;
    }
`

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;        
`