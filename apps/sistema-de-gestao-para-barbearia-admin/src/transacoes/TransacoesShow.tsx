import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENTES_TITLE_FIELD } from "../clientes/ClientesTitle";

export const TransacoesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="valor" source="valor" />
      </SimpleShowLayout>
    </Show>
  );
};
