import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClientesService } from "./clientes.service";
import { ClientesControllerBase } from "./base/clientes.controller.base";

@swagger.ApiTags("clientes")
@common.Controller("clientes")
export class ClientesController extends ClientesControllerBase {
  constructor(protected readonly service: ClientesService) {
    super(service);
  }
}
