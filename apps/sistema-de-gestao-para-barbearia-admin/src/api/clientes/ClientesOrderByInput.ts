import { SortOrder } from "../../util/SortOrder";

export type ClientesOrderByInput = {
  createdAt?: SortOrder;
  dataNascimento?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  telefone?: SortOrder;
  updatedAt?: SortOrder;
};
