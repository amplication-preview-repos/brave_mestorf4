import { Module } from "@nestjs/common";
import { ProdutosModuleBase } from "./base/produtos.module.base";
import { ProdutosService } from "./produtos.service";
import { ProdutosController } from "./produtos.controller";
import { ProdutosResolver } from "./produtos.resolver";

@Module({
  imports: [ProdutosModuleBase],
  controllers: [ProdutosController],
  providers: [ProdutosService, ProdutosResolver],
  exports: [ProdutosService],
})
export class ProdutosModule {}
