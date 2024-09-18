import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AgendamentosTitle } from "../agendamentos/AgendamentosTitle";

export const ServicosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="agendamentosItems"
          reference="Agendamentos"
        >
          <SelectArrayInput
            optionText={AgendamentosTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="descricao" multiline source="descricao" />
        <TextInput label="nome" source="nome" />
        <NumberInput label="preco" source="preco" />
      </SimpleForm>
    </Edit>
  );
};
