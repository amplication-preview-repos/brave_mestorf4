import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientesWhereInput = {
  dataNascimento?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  telefone?: StringNullableFilter;
};
