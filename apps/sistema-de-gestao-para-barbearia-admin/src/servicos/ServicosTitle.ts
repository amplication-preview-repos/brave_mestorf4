import { Servicos as TServicos } from "../api/servicos/Servicos";

export const SERVICOS_TITLE_FIELD = "nome";

export const ServicosTitle = (record: TServicos): string => {
  return record.nome?.toString() || String(record.id);
};
