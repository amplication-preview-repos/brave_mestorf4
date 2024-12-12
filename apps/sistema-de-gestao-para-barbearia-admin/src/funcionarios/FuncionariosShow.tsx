import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FUNCIONARIOS_TITLE_FIELD } from "./FuncionariosTitle";

export const FuncionariosShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cargo" source="cargo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <TextField label="salario" source="salario" />
        <TextField label="telefone" source="telefone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Acessos"
          target="funcionarioId"
          label="AcessosItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dataHoraAcesso" source="dataHoraAcesso" />
            <ReferenceField
              label="funcionario"
              source="funcionarios.id"
              reference="Funcionarios"
            >
              <TextField source={FUNCIONARIOS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="tipoAcesso" source="tipoAcesso" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
