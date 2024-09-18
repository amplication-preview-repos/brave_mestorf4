import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfissionaisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="especialidade" source="especialidade" />
        <TextInput label="nome" source="nome" />
        <TextInput label="telefone" source="telefone" />
      </SimpleForm>
    </Create>
  );
};
