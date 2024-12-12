import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProdutosService } from "./produtos.service";
import { ProdutosControllerBase } from "./base/produtos.controller.base";

@swagger.ApiTags("produtos")
@common.Controller("produtos")
export class ProdutosController extends ProdutosControllerBase {
  constructor(protected readonly service: ProdutosService) {
    super(service);
  }
}
