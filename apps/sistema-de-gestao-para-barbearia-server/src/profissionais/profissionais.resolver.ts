import * as graphql from "@nestjs/graphql";
import { ProfissionaisResolverBase } from "./base/profissionais.resolver.base";
import { Profissionais } from "./base/Profissionais";
import { ProfissionaisService } from "./profissionais.service";

@graphql.Resolver(() => Profissionais)
export class ProfissionaisResolver extends ProfissionaisResolverBase {
  constructor(protected readonly service: ProfissionaisService) {
    super(service);
  }
}
