import { Module } from "@nestjs/common";
import { DisponibilidadeProfissionaisModuleBase } from "./base/disponibilidadeProfissionais.module.base";
import { DisponibilidadeProfissionaisService } from "./disponibilidadeProfissionais.service";
import { DisponibilidadeProfissionaisController } from "./disponibilidadeProfissionais.controller";
import { DisponibilidadeProfissionaisResolver } from "./disponibilidadeProfissionais.resolver";

@Module({
  imports: [DisponibilidadeProfissionaisModuleBase],
  controllers: [DisponibilidadeProfissionaisController],
  providers: [
    DisponibilidadeProfissionaisService,
    DisponibilidadeProfissionaisResolver,
  ],
  exports: [DisponibilidadeProfissionaisService],
})
export class DisponibilidadeProfissionaisModule {}
