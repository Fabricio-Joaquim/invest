import styled from 'styled-components'

interface props {
    left: boolean
}
export const Label = styled.label<props>`
    display:block;
	margin-left: 15px;
    width:100%;
    height: 55px;
	border:2px solid #000;
	background:#f2f2f2;
	border-radius:${props => props.left ? '10px 0 0 10px' : '0 10px 10px 0'};
	text-align:center;
	padding:10px 1.5em;
	font-size:${props => props.theme.fontSize.small};
	box-shadow:0 0 5px 5px rgba(0,0,0,0.2);
    :hover {
	background:#ddd;
}
    :active{
        background-color: ${props => props.theme.colors.secundary};
    }
    :checked{
        background-color: ${props => props.theme.colors.secundary};

    }
`

export const Input = styled.input`
    position:absolute;
	left:22px;
	top:5px;
	width: 2.2em;
	height: 2.2em;
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	appearance: none;
	border:none;
	padding:0;
	border-radius:0;
	vertical-align: middle;
	background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='512px' height='512px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3e%3cpath d='M448,71.9c-17.3-13.4-41.5-9.3-54.1,9.1L214,344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8 c-15.6,15.5-16.4,41.6-1.7,58.1c0,0,120.4,133.6,137.7,147c17.3,13.4,41.5,9.3,54.1-9.1l206.3-301.7 C469.2,110.9,465.3,85.2,448,71.9z'/%3e%3c/svg%3e");
	background-repeat:no-repeat;
	background-size:cover;
	background-color:transparent;
	background-position:-10em -10em;
	transition:.3s ease;
	outline:0;
    :focus + ${Label}{
        background-color: ${props => props.theme.colors.secundary};

    }
    :active +  ${Label} {
	    background-color: ${props => props.theme.colors.secundary};
    }
    :checked {
	background-position: 0 0;
    
    }
`

export const Main = styled.div`
    position: relative;
`