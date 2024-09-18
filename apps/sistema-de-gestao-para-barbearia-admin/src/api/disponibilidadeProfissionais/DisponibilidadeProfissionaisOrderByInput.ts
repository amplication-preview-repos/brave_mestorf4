import { SortOrder } from "../../util/SortOrder";

export type DisponibilidadeProfissionaisOrderByInput = {
  createdAt?: SortOrder;
  horarioFim?: SortOrder;
  horarioInicio?: SortOrder;
  id?: SortOrder;
  profissional?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
