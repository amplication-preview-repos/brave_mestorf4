import { Module } from "@nestjs/common";
import { ProfissionaisModuleBase } from "./base/profissionais.module.base";
import { ProfissionaisService } from "./profissionais.service";
import { ProfissionaisController } from "./profissionais.controller";
import { ProfissionaisResolver } from "./profissionais.resolver";

@Module({
  imports: [ProfissionaisModuleBase],
  controllers: [ProfissionaisController],
  providers: [ProfissionaisService, ProfissionaisResolver],
  exports: [ProfissionaisService],
})
export class ProfissionaisModule {}
