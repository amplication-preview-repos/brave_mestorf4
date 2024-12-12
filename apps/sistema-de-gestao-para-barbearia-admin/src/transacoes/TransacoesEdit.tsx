import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClientesTitle } from "../clientes/ClientesTitle";

export const TransacoesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
