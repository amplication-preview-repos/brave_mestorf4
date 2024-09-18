import * as graphql from "@nestjs/graphql";
import { TransacoesResolverBase } from "./base/transacoes.resolver.base";
import { Transacoes } from "./base/Transacoes";
import { TransacoesService } from "./transacoes.service";

@graphql.Resolver(() => Transacoes)
export class TransacoesResolver extends TransacoesResolverBase {
  constructor(protected readonly service: TransacoesService) {
    super(service);
  }
}
