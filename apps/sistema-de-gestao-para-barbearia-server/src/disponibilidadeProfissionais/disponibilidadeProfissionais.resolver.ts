import * as graphql from "@nestjs/graphql";
import { DisponibilidadeProfissionaisResolverBase } from "./base/disponibilidadeProfissionais.resolver.base";
import { DisponibilidadeProfissionais } from "./base/DisponibilidadeProfissionais";
import { DisponibilidadeProfissionaisService } from "./disponibilidadeProfissionais.service";

@graphql.Resolver(() => DisponibilidadeProfissionais)
export class DisponibilidadeProfissionaisResolver extends DisponibilidadeProfissionaisResolverBase {
  constructor(protected readonly service: DisponibilidadeProfissionaisService) {
    super(service);
  }
}
