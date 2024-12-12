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
import { SERVICOS_TITLE_FIELD } from "../servicos/ServicosTitle";

export const AgendamentosShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="duracao" source="duracao" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="servico"
          source="servicos.id"
          reference="Servicos"
        >
          <TextField source={SERVICOS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
