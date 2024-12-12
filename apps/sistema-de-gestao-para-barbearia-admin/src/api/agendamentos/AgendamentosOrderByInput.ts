import { SortOrder } from "../../util/SortOrder";

export type AgendamentosOrderByInput = {
  clienteId?: SortOrder;
  createdAt?: SortOrder;
  dataHora?: SortOrder;
  duracao?: SortOrder;
  id?: SortOrder;
  servicoId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
