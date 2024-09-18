import { Mensagens as TMensagens } from "../api/mensagens/Mensagens";

export const MENSAGENS_TITLE_FIELD = "destinatario";

export const MensagensTitle = (record: TMensagens): string => {
  return record.destinatario?.toString() || String(record.id);
};
