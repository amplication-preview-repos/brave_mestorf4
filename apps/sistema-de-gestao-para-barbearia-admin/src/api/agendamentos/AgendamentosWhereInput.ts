import { ClientesWhereUniqueInput } from "../clientes/ClientesWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicosWhereUniqueInput } from "../servicos/ServicosWhereUniqueInput";

export type AgendamentosWhereInput = {
  cliente?: ClientesWhereUniqueInput;
  dataHora?: DateTimeNullableFilter;
  duracao?: IntNullableFilter;
  id?: StringFilter;
  servico?: ServicosWhereUniqueInput;
  status?: "Option1";
};
