import * as graphql from "@nestjs/graphql";
import { MensagensResolverBase } from "./base/mensagens.resolver.base";
import { Mensagens } from "./base/Mensagens";
import { MensagensService } from "./mensagens.service";

@graphql.Resolver(() => Mensagens)
export class MensagensResolver extends MensagensResolverBase {
  constructor(protected readonly service: MensagensService) {
    super(service);
  }
}
