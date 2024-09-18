import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfissionaisWhereInput = {
  email?: StringNullableFilter;
  especialidade?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  telefone?: StringNullableFilter;
};
