import { Agendamentos } from "../agendamentos/Agendamentos";

export type Servicos = {
  agendamentosItems?: Array<Agendamentos>;
  createdAt: Date;
  descricao: string | null;
  id: string;
  nome: string | null;
  preco: number | null;
  updatedAt: Date;
};
