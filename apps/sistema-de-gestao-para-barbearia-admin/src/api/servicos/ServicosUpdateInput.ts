import { AgendamentosUpdateManyWithoutServicosItemsInput } from "./AgendamentosUpdateManyWithoutServicosItemsInput";

export type ServicosUpdateInput = {
  agendamentosItems?: AgendamentosUpdateManyWithoutServicosItemsInput;
  descricao?: string | null;
  nome?: string | null;
  preco?: number | null;
};
