import { Produtos as TProdutos } from "../api/produtos/Produtos";

export const PRODUTOS_TITLE_FIELD = "nome";

export const ProdutosTitle = (record: TProdutos): string => {
  return record.nome?.toString() || String(record.id);
};
