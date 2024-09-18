import { Module } from "@nestjs/common";
import { ProfissionaisModule } from "./profissionais/profissionais.module";
import { ClientesModule } from "./clientes/clientes.module";
import { AgendamentosModule } from "./agendamentos/agendamentos.module";
import { MensagensModule } from "./mensagens/mensagens.module";
import { DisponibilidadeProfissionaisModule } from "./disponibilidadeProfissionais/disponibilidadeProfissionais.module";
import { AcessosModule } from "./acessos/acessos.module";
import { FuncionariosModule } from "./funcionarios/funcionarios.module";
import { ProdutosModule } from "./produtos/produtos.module";
import { TransacoesModule } from "./transacoes/transacoes.module";
import { ServicosModule } from "./servicos/servicos.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ProfissionaisModule,
    ClientesModule,
    AgendamentosModule,
    MensagensModule,
    DisponibilidadeProfissionaisModule,
    AcessosModule,
    FuncionariosModule,
    ProdutosModule,
    TransacoesModule,
    ServicosModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
