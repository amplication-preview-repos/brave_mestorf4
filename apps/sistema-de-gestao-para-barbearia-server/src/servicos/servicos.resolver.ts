import * as graphql from "@nestjs/graphql";
import { ServicosResolverBase } from "./base/servicos.resolver.base";
import { Servicos } from "./base/Servicos";
import { ServicosService } from "./servicos.service";

@graphql.Resolver(() => Servicos)
export class ServicosResolver extends ServicosResolverBase {
  constructor(protected readonly service: ServicosService) {
    super(service);
  }
}
