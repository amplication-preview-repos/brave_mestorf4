import { SortOrder } from "../../util/SortOrder";

export type AcessosOrderByInput = {
  createdAt?: SortOrder;
  dataHoraAcesso?: SortOrder;
  funcionarioId?: SortOrder;
  id?: SortOrder;
  tipoAcesso?: SortOrder;
  updatedAt?: SortOrder;
};
