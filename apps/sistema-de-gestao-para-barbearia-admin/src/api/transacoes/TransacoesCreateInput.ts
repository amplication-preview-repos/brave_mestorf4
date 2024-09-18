import { ClientesWhereUniqueInput } from "../clientes/ClientesWhereUniqueInput";

export type TransacoesCreateInput = {
  cliente?: ClientesWhereUniqueInput | null;
  dataHora?: Date | null;
  itemVendido?: string | null;
  metodoPagamento?: "Option1" | null;
  valor?: number | null;
};
