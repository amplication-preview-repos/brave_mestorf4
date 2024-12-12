import { Profissionais as TProfissionais } from "../api/profissionais/Profissionais";

export const PROFISSIONAIS_TITLE_FIELD = "especialidade";

export const ProfissionaisTitle = (record: TProfissionais): string => {
  return record.especialidade?.toString() || String(record.id);
};
