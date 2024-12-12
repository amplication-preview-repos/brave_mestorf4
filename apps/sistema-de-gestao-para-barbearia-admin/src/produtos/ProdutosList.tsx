import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProdutosList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ProdutosItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descricao" source="descricao" />
        <TextField label="estoque" source="estoque" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <TextField label="preco" source="preco" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
