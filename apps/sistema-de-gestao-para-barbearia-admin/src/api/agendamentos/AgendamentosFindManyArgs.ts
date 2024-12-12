import { AgendamentosWhereInput } from "./AgendamentosWhereInput";
import { AgendamentosOrderByInput } from "./AgendamentosOrderByInput";

export type AgendamentosFindManyArgs = {
  where?: AgendamentosWhereInput;
  orderBy?: Array<AgendamentosOrderByInput>;
  skip?: number;
  take?: number;
};
