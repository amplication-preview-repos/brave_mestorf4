import { Module } from "@nestjs/common";
import { ClientesModuleBase } from "./base/clientes.module.base";
import { ClientesService } from "./clientes.service";
import { ClientesController } from "./clientes.controller";
import { ClientesResolver } from "./clientes.resolver";

@Module({
  imports: [ClientesModuleBase],
  controllers: [ClientesController],
  providers: [ClientesService, ClientesResolver],
  exports: [ClientesService],
})
export class ClientesModule {}
