export interface ServicoModel {
    id: number;
    descricao: string;
    valor: number;
}

export interface ServicoList {
    dados: ServicoModel[]; 
}

export interface RequestCreate{
    id: number;
    descricao: string;
    valor: number;      
}

export interface ResponseCreate{
    id: number;
    descricao: string;
    valor: number;      
}