import { SortOrder } from "../../util/SortOrder";

export type TransacoesOrderByInput = {
  clienteId?: SortOrder;
  createdAt?: SortOrder;
  dataHora?: SortOrder;
  id?: SortOrder;
  itemVendido?: SortOrder;
  metodoPagamento?: SortOrder;
  updatedAt?: SortOrder;
  valor?: SortOrder;
};
