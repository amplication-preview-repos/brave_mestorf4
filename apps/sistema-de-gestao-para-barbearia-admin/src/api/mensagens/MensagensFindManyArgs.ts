import { MensagensWhereInput } from "./MensagensWhereInput";
import { MensagensOrderByInput } from "./MensagensOrderByInput";

export type MensagensFindManyArgs = {
  where?: MensagensWhereInput;
  orderBy?: Array<MensagensOrderByInput>;
  skip?: number;
  take?: number;
};
