import { AcessosWhereInput } from "./AcessosWhereInput";
import { AcessosOrderByInput } from "./AcessosOrderByInput";

export type AcessosFindManyArgs = {
  where?: AcessosWhereInput;
  orderBy?: Array<AcessosOrderByInput>;
  skip?: number;
  take?: number;
};
