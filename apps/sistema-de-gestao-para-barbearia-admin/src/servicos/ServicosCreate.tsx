import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AgendamentosTitle } from "../agendamentos/AgendamentosTitle";

export const ServicosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
