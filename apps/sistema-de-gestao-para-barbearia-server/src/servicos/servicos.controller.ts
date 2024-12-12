import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServicosService } from "./servicos.service";
import { ServicosControllerBase } from "./base/servicos.controller.base";

@swagger.ApiTags("servicos")
@common.Controller("servicos")
export class ServicosController extends ServicosControllerBase {
  constructor(protected readonly service: ServicosService) {
    super(service);
  }
}
