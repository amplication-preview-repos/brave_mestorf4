import { SortOrder } from "../../util/SortOrder";

export type ServicosOrderByInput = {
  createdAt?: SortOrder;
  descricao?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  preco?: SortOrder;
  updatedAt?: SortOrder;
};
