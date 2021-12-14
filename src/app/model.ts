export class Horario {
  data: string;
  hora: string;
  servico: string;
}

export class Pessoa {
  cpf: string;
  nome: string;
  telefone: string;
  email: string;

}

export class Expediente {
  periodoExpediente: ExpedienteEnum;
  funcionario = new Funcionario();
}

export class Servico {
  descricao: string;
  valor: String;
}

export class Endereco {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
}

export class Cliente {
  codigo?: number;
  nome?: string;
  cpf?: string;
  telefone?: string;
  endereco = new Endereco();
  ativo = true;
}

export class Funcionario {
  codigo?: number;
  nome?: string;
  cpf?: string;
  especialidade?: EspecialidadeEnum;
  expediente?: ExpedienteEnum;
  endereco = new Endereco();
  ativo = true;
}

export enum PeriodoEnum {
  MANHA,
  TARDE,
  NOITE,
  MADRUGADA
}

export enum ExpedienteEnum {
  MANHA_TARDE,
  TARDE_NOITE,
  NOITE_MADRUGADA
}

export enum EspecialidadeEnum {
  RELAXAMENTO,
  MASSAGEM,
  CORTES_PENTEADOS,
  MAQUIAGEM,
  MAOS,
  PES,
  BARBA_BIGODE,
  CORTE_MASCULINO
}

export class Categoria {
  codigo?: number;
}

export class Lancamento {
  codigo?: number;
  tipo = 'REALIZAR';
  descricao?: string;
  dataVencimento?: Date;
  dataPagamento?: Date;
  valor?: number;
  observacao?: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}
