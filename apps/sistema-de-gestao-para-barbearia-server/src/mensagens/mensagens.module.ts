import { Module } from "@nestjs/common";
import { MensagensModuleBase } from "./base/mensagens.module.base";
import { MensagensService } from "./mensagens.service";
import { MensagensController } from "./mensagens.controller";
import { MensagensResolver } from "./mensagens.resolver";

@Module({
  imports: [MensagensModuleBase],
  controllers: [MensagensController],
  providers: [MensagensService, MensagensResolver],
  exports: [MensagensService],
})
export class MensagensModule {}
