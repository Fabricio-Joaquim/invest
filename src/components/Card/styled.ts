import styled from 'styled-components'
interface props{
    green?:boolean
}
export const Wrapper = styled.section<props>`
    display: flex;
    background-color: #F4F4F4;
    height: 100px;
    width: 300px;
    margin-bottom: 30px;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    span{
        font-weight: 900;
    }
    p{
        color:${props => props.green?'#2F991E':'black'};
    }

`