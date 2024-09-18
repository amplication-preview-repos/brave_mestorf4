import { Clientes } from "../clientes/Clientes";
import { Servicos } from "../servicos/Servicos";

export type Agendamentos = {
  cliente?: Clientes | null;
  createdAt: Date;
  dataHora: Date | null;
  duracao: number | null;
  id: string;
  servico?: Servicos | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
