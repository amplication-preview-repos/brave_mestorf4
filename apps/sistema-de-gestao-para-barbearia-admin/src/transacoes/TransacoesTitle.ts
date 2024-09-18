import { Transacoes as TTransacoes } from "../api/transacoes/Transacoes";

export const TRANSACOES_TITLE_FIELD = "id";

export const TransacoesTitle = (record: TTransacoes): string => {
  return record.id?.toString() || String(record.id);
};
