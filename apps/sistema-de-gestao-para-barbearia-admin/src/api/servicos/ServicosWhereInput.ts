import { AgendamentosListRelationFilter } from "../agendamentos/AgendamentosListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServicosWhereInput = {
  agendamentosItems?: AgendamentosListRelationFilter;
  descricao?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  preco?: FloatNullableFilter;
};
