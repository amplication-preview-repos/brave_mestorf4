import * as graphql from "@nestjs/graphql";
import { FuncionariosResolverBase } from "./base/funcionarios.resolver.base";
import { Funcionarios } from "./base/Funcionarios";
import { FuncionariosService } from "./funcionarios.service";

@graphql.Resolver(() => Funcionarios)
export class FuncionariosResolver extends FuncionariosResolverBase {
  constructor(protected readonly service: FuncionariosService) {
    super(service);
  }
}
