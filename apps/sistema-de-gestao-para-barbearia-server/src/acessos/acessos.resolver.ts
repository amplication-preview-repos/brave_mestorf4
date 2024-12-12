import * as graphql from "@nestjs/graphql";
import { AcessosResolverBase } from "./base/acessos.resolver.base";
import { Acessos } from "./base/Acessos";
import { AcessosService } from "./acessos.service";

@graphql.Resolver(() => Acessos)
export class AcessosResolver extends AcessosResolverBase {
  constructor(protected readonly service: AcessosService) {
    super(service);
  }
}
