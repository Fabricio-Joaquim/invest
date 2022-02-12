import styled from 'styled-components'

export const MInput = styled.input`
    border: none;
    background-color: transparent;
    margin-top: 30px;
    height: 30px;
    border-bottom: 2px solid black;
    padding-left: 5px;
    font-size: ${props => props.theme.fontSize.small};
    :focus{
        border: none;
    }
`