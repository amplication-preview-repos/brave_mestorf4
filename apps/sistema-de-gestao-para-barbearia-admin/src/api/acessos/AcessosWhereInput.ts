import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FuncionariosWhereUniqueInput } from "../funcionarios/FuncionariosWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AcessosWhereInput = {
  dataHoraAcesso?: DateTimeNullableFilter;
  funcionario?: FuncionariosWhereUniqueInput;
  id?: StringFilter;
  tipoAcesso?: "Option1";
};
