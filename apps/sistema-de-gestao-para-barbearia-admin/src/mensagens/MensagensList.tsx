import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MensagensList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MensagensItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destinatario" source="destinatario" />
        <TextField label="ID" source="id" />
        <BooleanField label="lida" source="lida" />
        <TextField label="mensagem" source="mensagem" />
        <TextField label="remetente" source="remetente" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
