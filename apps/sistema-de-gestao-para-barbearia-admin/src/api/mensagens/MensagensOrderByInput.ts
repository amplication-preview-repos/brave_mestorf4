import { SortOrder } from "../../util/SortOrder";

export type MensagensOrderByInput = {
  createdAt?: SortOrder;
  destinatario?: SortOrder;
  id?: SortOrder;
  lida?: SortOrder;
  mensagem?: SortOrder;
  remetente?: SortOrder;
  updatedAt?: SortOrder;
};
