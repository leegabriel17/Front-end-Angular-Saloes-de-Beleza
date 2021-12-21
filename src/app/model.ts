import * as moment from "moment";

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
  id?: number;
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
  idCliente?: number;
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
  MANHA,
  TARDE,
  NOITE,
  MANHA_TARDE,
  TARDE_NOITE
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

export class Agendamento{
  idAgendamento: number;
  dataAgendada: Date;
  servicos: number;
  cliente = new Cliente();
  funcionario = new Funcionario();

}

export class Atendimento{
  codigo: number;
  horarioAtendimeno: Date;
  atendimentoExecutado: Boolean;
  agendamento = new Agendamento ();
  cliente = new Cliente ();
  funcionario = new Funcionario ();
  servico = new Servico();

  static toJson(atendimento: Atendimento): any {
    return {

     codigo: atendimento.codigo,
     horarioAtendimeno: moment(atendimento.horarioAtendimeno).format('DD/MM/YYYY hh:mm'),
     atendimentoExecutado: atendimento.atendimentoExecutado,
     agendamento: atendimento.agendamento.idAgendamento,
     cliente: atendimento.cliente.idCliente,
     funcionario: atendimento.funcionario.codigo,
     servico: atendimento.servico.id
    };
  }
}
