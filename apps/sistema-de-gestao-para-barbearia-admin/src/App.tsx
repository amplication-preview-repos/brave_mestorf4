import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProfissionaisList } from "./profissionais/ProfissionaisList";
import { ProfissionaisCreate } from "./profissionais/ProfissionaisCreate";
import { ProfissionaisEdit } from "./profissionais/ProfissionaisEdit";
import { ProfissionaisShow } from "./profissionais/ProfissionaisShow";
import { ClientesList } from "./clientes/ClientesList";
import { ClientesCreate } from "./clientes/ClientesCreate";
import { ClientesEdit } from "./clientes/ClientesEdit";
import { ClientesShow } from "./clientes/ClientesShow";
import { MensagensList } from "./mensagens/MensagensList";
import { MensagensCreate } from "./mensagens/MensagensCreate";
import { MensagensEdit } from "./mensagens/MensagensEdit";
import { MensagensShow } from "./mensagens/MensagensShow";
import { AgendamentosList } from "./agendamentos/AgendamentosList";
import { AgendamentosCreate } from "./agendamentos/AgendamentosCreate";
import { AgendamentosEdit } from "./agendamentos/AgendamentosEdit";
import { AgendamentosShow } from "./agendamentos/AgendamentosShow";
import { DisponibilidadeProfissionaisList } from "./disponibilidadeProfissionais/DisponibilidadeProfissionaisList";
import { DisponibilidadeProfissionaisCreate } from "./disponibilidadeProfissionais/DisponibilidadeProfissionaisCreate";
import { DisponibilidadeProfissionaisEdit } from "./disponibilidadeProfissionais/DisponibilidadeProfissionaisEdit";
import { DisponibilidadeProfissionaisShow } from "./disponibilidadeProfissionais/DisponibilidadeProfissionaisShow";
import { FuncionariosList } from "./funcionarios/FuncionariosList";
import { FuncionariosCreate } from "./funcionarios/FuncionariosCreate";
import { FuncionariosEdit } from "./funcionarios/FuncionariosEdit";
import { FuncionariosShow } from "./funcionarios/FuncionariosShow";
import { ProdutosList } from "./produtos/ProdutosList";
import { ProdutosCreate } from "./produtos/ProdutosCreate";
import { ProdutosEdit } from "./produtos/ProdutosEdit";
import { ProdutosShow } from "./produtos/ProdutosShow";
import { ServicosList } from "./servicos/ServicosList";
import { ServicosCreate } from "./servicos/ServicosCreate";
import { ServicosEdit } from "./servicos/ServicosEdit";
import { ServicosShow } from "./servicos/ServicosShow";
import { TransacoesList } from "./transacoes/TransacoesList";
import { TransacoesCreate } from "./transacoes/TransacoesCreate";
import { TransacoesEdit } from "./transacoes/TransacoesEdit";
import { TransacoesShow } from "./transacoes/TransacoesShow";
import { AcessosList } from "./acessos/AcessosList";
import { AcessosCreate } from "./acessos/AcessosCreate";
import { AcessosEdit } from "./acessos/AcessosEdit";
import { AcessosShow } from "./acessos/AcessosShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Sistema de Gestão para Barbearia"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Profissionais"
          list={ProfissionaisList}
          edit={ProfissionaisEdit}
          create={ProfissionaisCreate}
          show={ProfissionaisShow}
        />
        <Resource
          name="Clientes"
          list={ClientesList}
          edit={ClientesEdit}
          create={ClientesCreate}
          show={ClientesShow}
        />
        <Resource
          name="Mensagens"
          list={MensagensList}
          edit={MensagensEdit}
          create={MensagensCreate}
          show={MensagensShow}
        />
        <Resource
          name="Agendamentos"
          list={AgendamentosList}
          edit={AgendamentosEdit}
          create={AgendamentosCreate}
          show={AgendamentosShow}
        />
        <Resource
          name="DisponibilidadeProfissionais"
          list={DisponibilidadeProfissionaisList}
          edit={DisponibilidadeProfissionaisEdit}
          create={DisponibilidadeProfissionaisCreate}
          show={DisponibilidadeProfissionaisShow}
        />
        <Resource
          name="Funcionarios"
          list={FuncionariosList}
          edit={FuncionariosEdit}
          create={FuncionariosCreate}
          show={FuncionariosShow}
        />
        <Resource
          name="Produtos"
          list={ProdutosList}
          edit={ProdutosEdit}
          create={ProdutosCreate}
          show={ProdutosShow}
        />
        <Resource
          name="Servicos"
          list={ServicosList}
          edit={ServicosEdit}
          create={ServicosCreate}
          show={ServicosShow}
        />
        <Resource
          name="Transacoes"
          list={TransacoesList}
          edit={TransacoesEdit}
          create={TransacoesCreate}
          show={TransacoesShow}
        />
        <Resource
          name="Acessos"
          list={AcessosList}
          edit={AcessosEdit}
          create={AcessosCreate}
          show={AcessosShow}
        />
      </Admin>
    </div>
  );
};

export default App;
