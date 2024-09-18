import { Funcionarios } from "../funcionarios/Funcionarios";

export type Acessos = {
  createdAt: Date;
  dataHoraAcesso: Date | null;
  funcionario?: Funcionarios | null;
  id: string;
  tipoAcesso?: "Option1" | null;
  updatedAt: Date;
};
