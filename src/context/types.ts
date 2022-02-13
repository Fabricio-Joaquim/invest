
export type IContext = {
    Data:string[],
    Render?:boolean,
    Graphics:IGraphic[],
    changeGraphic?: any,
    getRender?: any
}

export interface IGraphic {
    aliquotaIR: number,
    ganhoLiquido: number,
    graficoValores: IdescriptionGraphic,
    tipoIndexacao: string,
    tipoRendimento: string,
    valorFinalBruto: number,
    valorFinalLiquido: number,
    valorPagoIR: number,
    valorTotalInvestido: number,

}

interface IdescriptionGraphic{
    comAporte: number [],
    semAporte:number [],
}

enum aporte{
    Z
}


export interface IBase {
    cdi: string,
	deadline: string,
	endAP: string,
	initialAP: string,
	ipca: string,
	profit: string,
	rendimento: string,
	index: string
}