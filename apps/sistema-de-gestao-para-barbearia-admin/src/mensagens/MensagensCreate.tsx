import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MensagensCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="destinatario" source="destinatario" />
        <BooleanInput label="lida" source="lida" />
        <TextInput label="mensagem" multiline source="mensagem" />
        <TextInput label="remetente" source="remetente" />
      </SimpleForm>
    </Create>
  );
};
