export interface Endereco {
    bairro: string;
    cep: string;
    cidade: string;
    complemento: string;
    estado: string;
    logradouro: string;
    numero: string;
}

export interface Cliente {
    ativo: boolean;
    cpf: string;
    email: string;
    endereco: Endereco;
    idCliente: number;
    nome: string;
    telefone: string;
}

export interface EnderecoFuncionario {
    bairro: string;
    cep: string;
    cidade: string;
    complemento: string;
    estado: string;
    logradouro: string;
    numero: string;
}

export interface Funcionario {
    ativo: boolean;
    codigo: number;
    cpf: string;
    endereco: EnderecoFuncionario;
    especialidade: string;
    expediente: string;
    nome: string;
}

export interface Servico {
    descricao: string;
    id: number;
    valor: number;
}

export interface AgendaModelo {
    cliente: Cliente;
    dataAgendada: string;
    funcionario: Funcionario;
    idAgendamento: number;
    servicos: Servico[];
}

export interface AgendaList{
    dados: AgendaModelo[];
}

export interface RequestCreateAgenda{
    idAgendamento: number;    
    dataAgendada: string;
    servicoId: number;
    clienteId: number;
    funcionarioId: number;        
}

export interface ResponseCreateAgenda{
    cliente: Cliente;
    dataAgendada: string;
    funcionario: Funcionario;
    idAgendamento: number;
    servicos: Servico[];
}