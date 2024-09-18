import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfissionaisService } from "./profissionais.service";
import { ProfissionaisControllerBase } from "./base/profissionais.controller.base";

@swagger.ApiTags("profissionais")
@common.Controller("profissionais")
export class ProfissionaisController extends ProfissionaisControllerBase {
  constructor(protected readonly service: ProfissionaisService) {
    super(service);
  }
}
