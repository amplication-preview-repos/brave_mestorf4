import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransacoesServiceBase } from "./base/transacoes.service.base";

@Injectable()
export class TransacoesService extends TransacoesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
