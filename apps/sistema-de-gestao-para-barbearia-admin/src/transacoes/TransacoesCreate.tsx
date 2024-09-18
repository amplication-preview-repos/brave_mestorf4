import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClientesTitle } from "../clientes/ClientesTitle";

export const TransacoesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="cliente.id"
          reference="Clientes"
          label="cliente"
        >
          <SelectInput optionText={ClientesTitle} />
        </ReferenceInput>
        <DateTimeInput label="dataHora" source="dataHora" />
        <TextInput label="itemVendido" source="itemVendido" />
        <SelectInput
          source="metodoPagamento"
          label="metodoPagamento"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="valor" source="valor" />
      </SimpleForm>
    </Create>
  );
};
