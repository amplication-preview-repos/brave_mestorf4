import { Transacoes as TTransacoes } from "../api/transacoes/Transacoes";

export const TRANSACOES_TITLE_FIELD = "itemVendido";

export const TransacoesTitle = (record: TTransacoes): string => {
  return record.itemVendido?.toString() || String(record.id);
};
