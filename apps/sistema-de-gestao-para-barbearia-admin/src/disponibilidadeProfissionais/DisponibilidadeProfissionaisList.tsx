import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DisponibilidadeProfissionaisList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DisponibilidadeProfissionaisItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="horarioFim" source="horarioFim" />
        <TextField label="horarioInicio" source="horarioInicio" />
        <TextField label="ID" source="id" />
        <TextField label="Profissional" source="profissional" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
