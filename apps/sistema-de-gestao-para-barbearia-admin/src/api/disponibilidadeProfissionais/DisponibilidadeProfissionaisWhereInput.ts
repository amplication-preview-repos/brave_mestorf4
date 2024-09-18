import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DisponibilidadeProfissionaisWhereInput = {
  horarioFim?: DateTimeNullableFilter;
  horarioInicio?: DateTimeNullableFilter;
  id?: StringFilter;
  profissional?: StringNullableFilter;
  status?: "Option1";
};
