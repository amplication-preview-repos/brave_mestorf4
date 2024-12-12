import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FUNCIONARIOS_TITLE_FIELD } from "../funcionarios/FuncionariosTitle";

export const AcessosList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AcessosItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataHoraAcesso" source="dataHoraAcesso" />
        <ReferenceField
          label="funcionario"
          source="funcionarios.id"
          reference="Funcionarios"
        >
          <TextField source={FUNCIONARIOS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="tipoAcesso" source="tipoAcesso" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
