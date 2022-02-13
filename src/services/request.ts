/*eslint-disable*/
import api from './index'
interface IIndicator{
	nome:string,
	valor:number
}

export default {

	async indicator() {
	const [cdi, ipca] =	await api.get<IIndicator[]>('indicadores')
	.then(({ data }) => (data))
		return [cdi.valor.toString(), ipca.valor.toString()]
},

	async filter(indexacao:string,rendimento:string){
		return api.get(`simulacoes/?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`).then(({data})=>(data))
	}
/* {
		"tipoIndexacao": "pre",
		"tipoRendimento": "bruto",
		"valorFinalBruto": 2048.09,
		"aliquotaIR": 0,
		"valorPagoIR": 0,
		"valorTotalInvestido": 1000,
		"valorFinalLiquido": 2048.09,
		"ganhoLiquido": 1048.08,
		"graficoValores": {
			"comAporte": {
				"0": 1000,
				"1": 1103.2737397822002,
				"2": 1206.8855709147763,
				"3": 1310.8366002208454,
				"4": 1415.1279381469494,
				"5": 1519.7606987749612,
				"6": 1624.7359998339643,
				"7": 1730.0549627121918,
				"8": 1835.7187124690122,
				"9": 1941.7283778469462,
				"10": 2048.0850912837323
			},
			"semAporte": {
				"0": 1000,
				"1": 1003.273739782199,
				"2": 1006.5581969365594,
				"3": 1009.853406548969,
				"4": 1013.1594038201774,
				"5": 1016.4762240661724,
				"6": 1019.8039027185573,
				"7": 1023.1424753249288,
				"8": 1026.4919775492574,
				"9": 1029.8524451722683,
				"10": 1033.2239140918239
			}
		}
	}, */


}