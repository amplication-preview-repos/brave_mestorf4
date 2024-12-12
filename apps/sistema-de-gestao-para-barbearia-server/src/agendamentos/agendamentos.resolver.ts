import * as graphql from "@nestjs/graphql";
import { AgendamentosResolverBase } from "./base/agendamentos.resolver.base";
import { Agendamentos } from "./base/Agendamentos";
import { AgendamentosService } from "./agendamentos.service";

@graphql.Resolver(() => Agendamentos)
export class AgendamentosResolver extends AgendamentosResolverBase {
  constructor(protected readonly service: AgendamentosService) {
    super(service);
  }
}
