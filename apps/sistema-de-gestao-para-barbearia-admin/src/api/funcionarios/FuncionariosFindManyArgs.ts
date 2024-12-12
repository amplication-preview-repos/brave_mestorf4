import { FuncionariosWhereInput } from "./FuncionariosWhereInput";
import { FuncionariosOrderByInput } from "./FuncionariosOrderByInput";

export type FuncionariosFindManyArgs = {
  where?: FuncionariosWhereInput;
  orderBy?: Array<FuncionariosOrderByInput>;
  skip?: number;
  take?: number;
};
