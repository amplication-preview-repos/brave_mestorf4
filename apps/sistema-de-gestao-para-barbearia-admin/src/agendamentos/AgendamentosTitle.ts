import { Agendamentos as TAgendamentos } from "../api/agendamentos/Agendamentos";

export const AGENDAMENTOS_TITLE_FIELD = "id";

export const AgendamentosTitle = (record: TAgendamentos): string => {
  return record.id?.toString() || String(record.id);
};
