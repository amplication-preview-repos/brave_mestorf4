import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MensagensEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="destinatario" source="destinatario" />
        <BooleanInput label="lida" source="lida" />
        <TextInput label="mensagem" multiline source="mensagem" />
        <TextInput label="remetente" source="remetente" />
      </SimpleForm>
    </Edit>
  );
};
