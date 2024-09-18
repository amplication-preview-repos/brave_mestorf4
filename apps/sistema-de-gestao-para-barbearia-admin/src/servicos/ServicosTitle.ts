import { Servicos as TServicos } from "../api/servicos/Servicos";

export const SERVICOS_TITLE_FIELD = "id";

export const ServicosTitle = (record: TServicos): string => {
  return record.id?.toString() || String(record.id);
};
