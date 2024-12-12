import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AcessosTitle } from "../acessos/AcessosTitle";

export const FuncionariosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="acessosItems" reference="Acessos">
          <SelectArrayInput
            optionText={AcessosTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="cargo" source="cargo" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nome" source="nome" />
        <NumberInput label="salario" source="salario" />
        <TextInput label="telefone" source="telefone" />
      </SimpleForm>
    </Edit>
  );
};
