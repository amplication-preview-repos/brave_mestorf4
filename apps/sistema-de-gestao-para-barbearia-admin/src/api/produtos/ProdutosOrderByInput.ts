import { SortOrder } from "../../util/SortOrder";

export type ProdutosOrderByInput = {
  createdAt?: SortOrder;
  descricao?: SortOrder;
  estoque?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  preco?: SortOrder;
  updatedAt?: SortOrder;
};
