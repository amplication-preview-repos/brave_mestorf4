import { Agendamentos } from "../agendamentos/Agendamentos";
import { Transacoes } from "../transacoes/Transacoes";

export type Clientes = {
  agendamentosItems?: Array<Agendamentos>;
  createdAt: Date;
  dataNascimento: Date | null;
  email: string | null;
  id: string;
  nome: string | null;
  telefone: string | null;
  transacoesItems?: Array<Transacoes>;
  updatedAt: Date;
};
