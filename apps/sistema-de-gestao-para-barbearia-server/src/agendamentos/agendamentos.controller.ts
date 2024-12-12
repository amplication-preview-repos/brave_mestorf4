import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgendamentosService } from "./agendamentos.service";
import { AgendamentosControllerBase } from "./base/agendamentos.controller.base";

@swagger.ApiTags("agendamentos")
@common.Controller("agendamentos")
export class AgendamentosController extends AgendamentosControllerBase {
  constructor(protected readonly service: AgendamentosService) {
    super(service);
  }
}
