import { ClientesWhereUniqueInput } from "../clientes/ClientesWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TransacoesWhereInput = {
  cliente?: ClientesWhereUniqueInput;
  dataHora?: DateTimeNullableFilter;
  id?: StringFilter;
  itemVendido?: StringNullableFilter;
  metodoPagamento?: "Option1";
  valor?: FloatNullableFilter;
};
