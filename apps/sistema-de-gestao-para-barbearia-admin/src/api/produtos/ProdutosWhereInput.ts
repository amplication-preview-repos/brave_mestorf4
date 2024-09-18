import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProdutosWhereInput = {
  descricao?: StringNullableFilter;
  estoque?: IntNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  preco?: FloatNullableFilter;
};
