export interface ServicoModel {
    id: number;
    descricao: string;
    valor: number;
}

export interface ServicoList {
    dados: ServicoModel[]; 
}