import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProdutosShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descricao" source="descricao" />
        <TextField label="estoque" source="estoque" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <TextField label="preco" source="preco" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
