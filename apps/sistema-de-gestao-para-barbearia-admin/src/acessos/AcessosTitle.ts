import { Acessos as TAcessos } from "../api/acessos/Acessos";

export const ACESSOS_TITLE_FIELD = "id";

export const AcessosTitle = (record: TAcessos): string => {
  return record.id?.toString() || String(record.id);
};
