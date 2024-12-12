import { Module } from "@nestjs/common";
import { AgendamentosModuleBase } from "./base/agendamentos.module.base";
import { AgendamentosService } from "./agendamentos.service";
import { AgendamentosController } from "./agendamentos.controller";
import { AgendamentosResolver } from "./agendamentos.resolver";

@Module({
  imports: [AgendamentosModuleBase],
  controllers: [AgendamentosController],
  providers: [AgendamentosService, AgendamentosResolver],
  exports: [AgendamentosService],
})
export class AgendamentosModule {}
