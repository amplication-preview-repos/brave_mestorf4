import { Module } from "@nestjs/common";
import { TransacoesModuleBase } from "./base/transacoes.module.base";
import { TransacoesService } from "./transacoes.service";
import { TransacoesController } from "./transacoes.controller";
import { TransacoesResolver } from "./transacoes.resolver";

@Module({
  imports: [TransacoesModuleBase],
  controllers: [TransacoesController],
  providers: [TransacoesService, TransacoesResolver],
  exports: [TransacoesService],
})
export class TransacoesModule {}
