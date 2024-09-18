import { DisponibilidadeProfissionais as TDisponibilidadeProfissionais } from "../api/disponibilidadeProfissionais/DisponibilidadeProfissionais";

export const DISPONIBILIDADEPROFISSIONAIS_TITLE_FIELD = "profissional";

export const DisponibilidadeProfissionaisTitle = (
  record: TDisponibilidadeProfissionais
): string => {
  return record.profissional?.toString() || String(record.id);
};
