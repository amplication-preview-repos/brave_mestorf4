import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DisponibilidadeProfissionaisService } from "./disponibilidadeProfissionais.service";
import { DisponibilidadeProfissionaisControllerBase } from "./base/disponibilidadeProfissionais.controller.base";

@swagger.ApiTags("disponibilidadeProfissionais")
@common.Controller("disponibilidadeProfissionais")
export class DisponibilidadeProfissionaisController extends DisponibilidadeProfissionaisControllerBase {
  constructor(protected readonly service: DisponibilidadeProfissionaisService) {
    super(service);
  }
}
