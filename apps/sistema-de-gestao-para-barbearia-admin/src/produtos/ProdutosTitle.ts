import { Produtos as TProdutos } from "../api/produtos/Produtos";

export const PRODUTOS_TITLE_FIELD = "id";

export const ProdutosTitle = (record: TProdutos): string => {
  return record.id?.toString() || String(record.id);
};
