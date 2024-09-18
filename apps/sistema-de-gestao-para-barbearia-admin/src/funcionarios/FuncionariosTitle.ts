import { Funcionarios as TFuncionarios } from "../api/funcionarios/Funcionarios";

export const FUNCIONARIOS_TITLE_FIELD = "id";

export const FuncionariosTitle = (record: TFuncionarios): string => {
  return record.id?.toString() || String(record.id);
};
