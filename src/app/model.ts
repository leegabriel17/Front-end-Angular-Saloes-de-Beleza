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
  descricao?: string;
  valor?: string;
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

  static toJson(funcionario: Funcionario): any {
    return {

     codigo: funcionario.codigo,
     nome: funcionario.nome,
     cpf: funcionario.cpf,
     especialidade: funcionario.especialidade,
     expediente: funcionario.expediente,
     ativo: funcionario.ativo,
     endereco: funcionario.endereco
    };
  }
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
  CABELO_CORTE,
  CABELO_COLORACAO,
  CABELO_LUZES,
  CABELO_ALIZAMENTO,
  CABELO_RECONSTRUCAO,
  CABELO_PERMANENTE,
  CABELO_HIDRATACAO,
  CABELO_PINTURA
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
