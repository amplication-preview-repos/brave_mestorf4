import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENTES_TITLE_FIELD } from "./ClientesTitle";
import { SERVICOS_TITLE_FIELD } from "../servicos/ServicosTitle";

export const ClientesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataNascimento" source="dataNascimento" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <TextField label="telefone" source="telefone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Agendamentos"
          target="clienteId"
          label="AgendamentosItems"
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transacoes"
          target="clienteId"
          label="TransacoesItems"
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
            <TextField label="valor" source="valor" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
