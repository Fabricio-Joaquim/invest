import {Main} from './styled'
import React from 'react'
interface props{
error: any
message:any
}

const Errorr = ({error, message}:props) => {
	return (
		<>
			{ error&&<Main>{message}</Main>}
		</>
	)}
export default Errorr