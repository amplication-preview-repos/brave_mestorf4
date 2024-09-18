import { ClientesWhereInput } from "./ClientesWhereInput";
import { ClientesOrderByInput } from "./ClientesOrderByInput";

export type ClientesFindManyArgs = {
  where?: ClientesWhereInput;
  orderBy?: Array<ClientesOrderByInput>;
  skip?: number;
  take?: number;
};
