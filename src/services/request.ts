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
}