import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FuncionariosTitle } from "../funcionarios/FuncionariosTitle";

export const AcessosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataHoraAcesso" source="dataHoraAcesso" />
        <ReferenceInput
          source="funcionario.id"
          reference="Funcionarios"
          label="funcionario"
        >
          <SelectInput optionText={FuncionariosTitle} />
        </ReferenceInput>
        <SelectInput
          source="tipoAcesso"
          label="tipoAcesso"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
