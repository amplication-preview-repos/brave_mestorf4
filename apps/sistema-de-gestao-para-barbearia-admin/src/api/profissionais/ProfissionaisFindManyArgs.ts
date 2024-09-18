import { ProfissionaisWhereInput } from "./ProfissionaisWhereInput";
import { ProfissionaisOrderByInput } from "./ProfissionaisOrderByInput";

export type ProfissionaisFindManyArgs = {
  where?: ProfissionaisWhereInput;
  orderBy?: Array<ProfissionaisOrderByInput>;
  skip?: number;
  take?: number;
};
