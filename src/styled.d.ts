import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
		Background: string,
		primary:string,
		secundary:string,
		three:string,
		other:string,
	},
	fontFamily:{
		Robo:string,
	},
	fontSize:{
		large:string,
		medium:string,
		small:string
	}
  }
}