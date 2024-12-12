import { Clientes } from "../clientes/Clientes";

export type Transacoes = {
  cliente?: Clientes | null;
  createdAt: Date;
  dataHora: Date | null;
  id: string;
  itemVendido: string | null;
  metodoPagamento?: "Option1" | null;
  updatedAt: Date;
  valor: number | null;
};
