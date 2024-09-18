import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MensagensWhereInput = {
  destinatario?: StringNullableFilter;
  id?: StringFilter;
  lida?: BooleanNullableFilter;
  mensagem?: StringNullableFilter;
  remetente?: StringNullableFilter;
};
