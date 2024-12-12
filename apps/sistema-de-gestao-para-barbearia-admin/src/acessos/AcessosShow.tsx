import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { FUNCIONARIOS_TITLE_FIELD } from "../funcionarios/FuncionariosTitle";

export const AcessosShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
