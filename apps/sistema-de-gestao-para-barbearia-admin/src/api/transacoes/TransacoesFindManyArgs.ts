import { TransacoesWhereInput } from "./TransacoesWhereInput";
import { TransacoesOrderByInput } from "./TransacoesOrderByInput";

export type TransacoesFindManyArgs = {
  where?: TransacoesWhereInput;
  orderBy?: Array<TransacoesOrderByInput>;
  skip?: number;
  take?: number;
};
