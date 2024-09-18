import { AgendamentosCreateNestedManyWithoutClientesItemsInput } from "./AgendamentosCreateNestedManyWithoutClientesItemsInput";
import { TransacoesCreateNestedManyWithoutClientesItemsInput } from "./TransacoesCreateNestedManyWithoutClientesItemsInput";

export type ClientesCreateInput = {
  agendamentosItems?: AgendamentosCreateNestedManyWithoutClientesItemsInput;
  dataNascimento?: Date | null;
  email?: string | null;
  nome?: string | null;
  telefone?: string | null;
  transacoesItems?: TransacoesCreateNestedManyWithoutClientesItemsInput;
};
