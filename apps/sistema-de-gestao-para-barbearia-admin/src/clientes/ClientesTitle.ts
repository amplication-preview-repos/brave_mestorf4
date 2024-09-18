import { Clientes as TClientes } from "../api/clientes/Clientes";

export const CLIENTES_TITLE_FIELD = "nome";

export const ClientesTitle = (record: TClientes): string => {
  return record.nome?.toString() || String(record.id);
};
