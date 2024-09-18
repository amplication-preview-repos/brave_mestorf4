import { SortOrder } from "../../util/SortOrder";

export type FuncionariosOrderByInput = {
  cargo?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  salario?: SortOrder;
  telefone?: SortOrder;
  updatedAt?: SortOrder;
};
