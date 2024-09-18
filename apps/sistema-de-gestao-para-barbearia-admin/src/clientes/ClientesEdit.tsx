import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ClientesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataNascimento" source="dataNascimento" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nome" source="nome" />
        <TextInput label="telefone" source="telefone" />
      </SimpleForm>
    </Edit>
  );
};
