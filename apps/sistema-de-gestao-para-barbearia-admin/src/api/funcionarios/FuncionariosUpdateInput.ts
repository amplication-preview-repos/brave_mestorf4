import { AcessosUpdateManyWithoutFuncionariosItemsInput } from "./AcessosUpdateManyWithoutFuncionariosItemsInput";

export type FuncionariosUpdateInput = {
  acessosItems?: AcessosUpdateManyWithoutFuncionariosItemsInput;
  cargo?: string | null;
  email?: string | null;
  nome?: string | null;
  salario?: number | null;
  telefone?: string | null;
};
