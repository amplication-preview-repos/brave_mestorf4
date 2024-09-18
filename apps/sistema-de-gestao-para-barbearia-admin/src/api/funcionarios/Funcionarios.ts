import { Acessos } from "../acessos/Acessos";

export type Funcionarios = {
  acessosItems?: Array<Acessos>;
  cargo: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  nome: string | null;
  salario: number | null;
  telefone: string | null;
  updatedAt: Date;
};
