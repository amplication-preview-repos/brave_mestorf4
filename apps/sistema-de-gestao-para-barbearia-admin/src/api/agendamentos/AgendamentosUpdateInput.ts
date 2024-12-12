import { ClientesWhereUniqueInput } from "../clientes/ClientesWhereUniqueInput";
import { ServicosWhereUniqueInput } from "../servicos/ServicosWhereUniqueInput";

export type AgendamentosUpdateInput = {
  cliente?: ClientesWhereUniqueInput | null;
  dataHora?: Date | null;
  duracao?: number | null;
  servico?: ServicosWhereUniqueInput | null;
  status?: "Option1" | null;
};
