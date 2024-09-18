import { Module } from "@nestjs/common";
import { FuncionariosModuleBase } from "./base/funcionarios.module.base";
import { FuncionariosService } from "./funcionarios.service";
import { FuncionariosController } from "./funcionarios.controller";
import { FuncionariosResolver } from "./funcionarios.resolver";

@Module({
  imports: [FuncionariosModuleBase],
  controllers: [FuncionariosController],
  providers: [FuncionariosService, FuncionariosResolver],
  exports: [FuncionariosService],
})
export class FuncionariosModule {}
