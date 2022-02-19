import styled from 'styled-components'
import CurrencyInput from 'react-currency-input-field'

export const DInput = styled(CurrencyInput)`
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

export const NInput = styled.input`
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

export const Percent = styled(CurrencyInput)`
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