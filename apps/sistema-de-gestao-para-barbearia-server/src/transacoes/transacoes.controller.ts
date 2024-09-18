import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransacoesService } from "./transacoes.service";
import { TransacoesControllerBase } from "./base/transacoes.controller.base";

@swagger.ApiTags("transacoes")
@common.Controller("transacoes")
export class TransacoesController extends TransacoesControllerBase {
  constructor(protected readonly service: TransacoesService) {
    super(service);
  }
}
