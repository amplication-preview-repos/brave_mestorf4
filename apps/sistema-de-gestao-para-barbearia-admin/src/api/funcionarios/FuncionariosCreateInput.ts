import { AcessosCreateNestedManyWithoutFuncionariosItemsInput } from "./AcessosCreateNestedManyWithoutFuncionariosItemsInput";

export type FuncionariosCreateInput = {
  acessosItems?: AcessosCreateNestedManyWithoutFuncionariosItemsInput;
  cargo?: string | null;
  email?: string | null;
  nome?: string | null;
  salario?: number | null;
  telefone?: string | null;
};
