import { Funcionarios as TFuncionarios } from "../api/funcionarios/Funcionarios";

export const FUNCIONARIOS_TITLE_FIELD = "cargo";

export const FuncionariosTitle = (record: TFuncionarios): string => {
  return record.cargo?.toString() || String(record.id);
};
