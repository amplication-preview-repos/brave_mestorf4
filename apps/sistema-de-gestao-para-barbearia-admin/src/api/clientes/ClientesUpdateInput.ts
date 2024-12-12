import { AgendamentosUpdateManyWithoutClientesItemsInput } from "./AgendamentosUpdateManyWithoutClientesItemsInput";
import { TransacoesUpdateManyWithoutClientesItemsInput } from "./TransacoesUpdateManyWithoutClientesItemsInput";

export type ClientesUpdateInput = {
  agendamentosItems?: AgendamentosUpdateManyWithoutClientesItemsInput;
  dataNascimento?: Date | null;
  email?: string | null;
  nome?: string | null;
  telefone?: string | null;
  transacoesItems?: TransacoesUpdateManyWithoutClientesItemsInput;
};
