import * as graphql from "@nestjs/graphql";
import { ClientesResolverBase } from "./base/clientes.resolver.base";
import { Clientes } from "./base/Clientes";
import { ClientesService } from "./clientes.service";

@graphql.Resolver(() => Clientes)
export class ClientesResolver extends ClientesResolverBase {
  constructor(protected readonly service: ClientesService) {
    super(service);
  }
}
