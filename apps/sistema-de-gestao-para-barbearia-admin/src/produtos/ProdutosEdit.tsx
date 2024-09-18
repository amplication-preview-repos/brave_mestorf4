import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProdutosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="descricao" multiline source="descricao" />
        <NumberInput step={1} label="estoque" source="estoque" />
        <TextInput label="nome" source="nome" />
        <NumberInput label="preco" source="preco" />
      </SimpleForm>
    </Edit>
  );
};
