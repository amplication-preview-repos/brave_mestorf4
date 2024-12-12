import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProdutosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="descricao" multiline source="descricao" />
        <NumberInput step={1} label="estoque" source="estoque" />
        <TextInput label="nome" source="nome" />
        <NumberInput label="preco" source="preco" />
      </SimpleForm>
    </Create>
  );
};
