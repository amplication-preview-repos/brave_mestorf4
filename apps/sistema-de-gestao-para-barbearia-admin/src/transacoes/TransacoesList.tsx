import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENTES_TITLE_FIELD } from "../clientes/ClientesTitle";

export const TransacoesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TransacoesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="cliente"
          source="clientes.id"
          reference="Clientes"
        >
          <TextField source={CLIENTES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataHora" source="dataHora" />
        <TextField label="ID" source="id" />
        <TextField label="itemVendido" source="itemVendido" />
        <TextField label="metodoPagamento" source="metodoPagamento" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valor" source="valor" />{" "}
      </Datagrid>
    </List>
  );
};
