import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FuncionariosTitle } from "../funcionarios/FuncionariosTitle";

export const AcessosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dataHoraAcesso" source="dataHoraAcesso" />
        <ReferenceInput
          source="funcionario.id"
          reference="Funcionarios"
          label="funcionario"
        >
          <SelectInput optionText={FuncionariosTitle} />
        </ReferenceInput>
        <SelectInput
          source="tipoAcesso"
          label="tipoAcesso"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
