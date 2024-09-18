import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ClientesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dataNascimento" source="dataNascimento" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nome" source="nome" />
        <TextInput label="telefone" source="telefone" />
      </SimpleForm>
    </Create>
  );
};
