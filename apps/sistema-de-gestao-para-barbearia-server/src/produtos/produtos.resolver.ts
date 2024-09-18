import * as graphql from "@nestjs/graphql";
import { ProdutosResolverBase } from "./base/produtos.resolver.base";
import { Produtos } from "./base/Produtos";
import { ProdutosService } from "./produtos.service";

@graphql.Resolver(() => Produtos)
export class ProdutosResolver extends ProdutosResolverBase {
  constructor(protected readonly service: ProdutosService) {
    super(service);
  }
}
