import { ProdutosWhereInput } from "./ProdutosWhereInput";
import { ProdutosOrderByInput } from "./ProdutosOrderByInput";

export type ProdutosFindManyArgs = {
  where?: ProdutosWhereInput;
  orderBy?: Array<ProdutosOrderByInput>;
  skip?: number;
  take?: number;
};
