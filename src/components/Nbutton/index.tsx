/*eslint-disable*/

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import {useState} from "react"
const NButton = () => {
	const [state,setState]= useState()
	const handleChange = (_:any, nextView:any) => {
		setState(nextView);
	  };
	return (
		<ToggleButtonGroup
			color="error"
			exclusive
			onChange={handleChange}
			value={state}
		>
			<ToggleButton value="web">Web</ToggleButton>
			<ToggleButton value="ios">iOS</ToggleButton>
		</ToggleButtonGroup>
	)
}

export default NButton