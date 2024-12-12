export type DisponibilidadeProfissionais = {
  createdAt: Date;
  horarioFim: Date | null;
  horarioInicio: Date | null;
  id: string;
  profissional: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
