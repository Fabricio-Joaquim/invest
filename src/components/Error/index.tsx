/*eslint-disable*/
import React from 'react'
import { FieldError } from 'react-hook-form'

interface props{
error: any
message:any
}

const Errorr = ({error, message}:props) => {
	return (
		<>
				{ error&&<span style={{color:"red"}}>{message}</span>}
		</>
	)}
export default Errorr