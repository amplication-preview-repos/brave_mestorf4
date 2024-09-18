import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ClientesTitle } from "../clientes/ClientesTitle";
import { ServicosTitle } from "../servicos/ServicosTitle";

export const AgendamentosEdit = (props: EditProps): React.ReactElement => {
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
        <NumberInput step={1} label="duracao" source="duracao" />
        <ReferenceInput
          source="servico.id"
          reference="Servicos"
          label="servico"
        >
          <SelectInput optionText={ServicosTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
