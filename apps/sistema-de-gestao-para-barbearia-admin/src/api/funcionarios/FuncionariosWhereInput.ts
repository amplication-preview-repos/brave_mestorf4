import { AcessosListRelationFilter } from "../acessos/AcessosListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FuncionariosWhereInput = {
  acessosItems?: AcessosListRelationFilter;
  cargo?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  salario?: FloatNullableFilter;
  telefone?: StringNullableFilter;
};
