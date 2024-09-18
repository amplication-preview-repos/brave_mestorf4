import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const MensagensShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destinatario" source="destinatario" />
        <TextField label="ID" source="id" />
        <BooleanField label="lida" source="lida" />
        <TextField label="mensagem" source="mensagem" />
        <TextField label="remetente" source="remetente" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
