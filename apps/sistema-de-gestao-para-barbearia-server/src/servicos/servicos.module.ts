import { Module } from "@nestjs/common";
import { ServicosModuleBase } from "./base/servicos.module.base";
import { ServicosService } from "./servicos.service";
import { ServicosController } from "./servicos.controller";
import { ServicosResolver } from "./servicos.resolver";

@Module({
  imports: [ServicosModuleBase],
  controllers: [ServicosController],
  providers: [ServicosService, ServicosResolver],
  exports: [ServicosService],
})
export class ServicosModule {}
