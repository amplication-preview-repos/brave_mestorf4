import { FuncionariosWhereUniqueInput } from "../funcionarios/FuncionariosWhereUniqueInput";

export type AcessosCreateInput = {
  dataHoraAcesso?: Date | null;
  funcionario?: FuncionariosWhereUniqueInput | null;
  tipoAcesso?: "Option1" | null;
};
