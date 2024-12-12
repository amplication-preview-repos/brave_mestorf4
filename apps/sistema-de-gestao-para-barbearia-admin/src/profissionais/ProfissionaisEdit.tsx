import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProfissionaisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="especialidade" source="especialidade" />
        <TextInput label="nome" source="nome" />
        <TextInput label="telefone" source="telefone" />
      </SimpleForm>
    </Edit>
  );
};
