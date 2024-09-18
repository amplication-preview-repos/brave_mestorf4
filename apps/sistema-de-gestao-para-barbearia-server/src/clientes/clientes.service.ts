import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientesServiceBase } from "./base/clientes.service.base";

@Injectable()
export class ClientesService extends ClientesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
