import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FuncionariosService } from "./funcionarios.service";
import { FuncionariosControllerBase } from "./base/funcionarios.controller.base";

@swagger.ApiTags("funcionarios")
@common.Controller("funcionarios")
export class FuncionariosController extends FuncionariosControllerBase {
  constructor(protected readonly service: FuncionariosService) {
    super(service);
  }
}
