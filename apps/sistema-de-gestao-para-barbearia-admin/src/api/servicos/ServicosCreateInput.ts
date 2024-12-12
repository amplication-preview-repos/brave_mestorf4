import { AgendamentosCreateNestedManyWithoutServicosItemsInput } from "./AgendamentosCreateNestedManyWithoutServicosItemsInput";

export type ServicosCreateInput = {
  agendamentosItems?: AgendamentosCreateNestedManyWithoutServicosItemsInput;
  descricao?: string | null;
  nome?: string | null;
  preco?: number | null;
};
