import { Mensagens as TMensagens } from "../api/mensagens/Mensagens";

export const MENSAGENS_TITLE_FIELD = "id";

export const MensagensTitle = (record: TMensagens): string => {
  return record.id?.toString() || String(record.id);
};
