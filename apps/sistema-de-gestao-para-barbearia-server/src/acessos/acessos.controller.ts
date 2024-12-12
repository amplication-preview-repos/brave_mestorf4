import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcessosService } from "./acessos.service";
import { AcessosControllerBase } from "./base/acessos.controller.base";

@swagger.ApiTags("acessos")
@common.Controller("acessos")
export class AcessosController extends AcessosControllerBase {
  constructor(protected readonly service: AcessosService) {
    super(service);
  }
}
