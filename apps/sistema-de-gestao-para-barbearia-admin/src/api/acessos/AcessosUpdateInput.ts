import { FuncionariosWhereUniqueInput } from "../funcionarios/FuncionariosWhereUniqueInput";

export type AcessosUpdateInput = {
  dataHoraAcesso?: Date | null;
  funcionario?: FuncionariosWhereUniqueInput | null;
  tipoAcesso?: "Option1" | null;
};
