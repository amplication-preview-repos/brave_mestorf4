import { ServicosWhereInput } from "./ServicosWhereInput";
import { ServicosOrderByInput } from "./ServicosOrderByInput";

export type ServicosFindManyArgs = {
  where?: ServicosWhereInput;
  orderBy?: Array<ServicosOrderByInput>;
  skip?: number;
  take?: number;
};
