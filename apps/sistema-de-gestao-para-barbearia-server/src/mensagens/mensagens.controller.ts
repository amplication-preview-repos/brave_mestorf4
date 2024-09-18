import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MensagensService } from "./mensagens.service";
import { MensagensControllerBase } from "./base/mensagens.controller.base";

@swagger.ApiTags("mensagens")
@common.Controller("mensagens")
export class MensagensController extends MensagensControllerBase {
  constructor(protected readonly service: MensagensService) {
    super(service);
  }
}
