import { AgendamentosListRelationFilter } from "../agendamentos/AgendamentosListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransacoesListRelationFilter } from "../transacoes/TransacoesListRelationFilter";

export type ClientesWhereInput = {
  agendamentosItems?: AgendamentosListRelationFilter;
  dataNascimento?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  telefone?: StringNullableFilter;
  transacoesItems?: TransacoesListRelationFilter;
};
