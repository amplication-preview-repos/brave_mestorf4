import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfissionaisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ProfissionaisItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="especialidade" source="especialidade" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <TextField label="telefone" source="telefone" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
