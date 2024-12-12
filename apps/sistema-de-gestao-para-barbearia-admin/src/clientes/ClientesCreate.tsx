import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AgendamentosTitle } from "../agendamentos/AgendamentosTitle";
import { TransacoesTitle } from "../transacoes/TransacoesTitle";

export const ClientesCreate = (props: CreateProps): React.ReactElement => {
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
        <DateTimeInput label="dataNascimento" source="dataNascimento" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nome" source="nome" />
        <TextInput label="telefone" source="telefone" />
        <ReferenceArrayInput source="transacoesItems" reference="Transacoes">
          <SelectArrayInput
            optionText={TransacoesTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
