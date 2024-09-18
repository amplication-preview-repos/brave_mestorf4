import { Module } from "@nestjs/common";
import { AcessosModuleBase } from "./base/acessos.module.base";
import { AcessosService } from "./acessos.service";
import { AcessosController } from "./acessos.controller";
import { AcessosResolver } from "./acessos.resolver";

@Module({
  imports: [AcessosModuleBase],
  controllers: [AcessosController],
  providers: [AcessosService, AcessosResolver],
  exports: [AcessosService],
})
export class AcessosModule {}
