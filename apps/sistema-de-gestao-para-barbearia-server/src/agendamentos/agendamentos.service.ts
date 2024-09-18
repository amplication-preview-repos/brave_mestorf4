import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgendamentosServiceBase } from "./base/agendamentos.service.base";

@Injectable()
export class AgendamentosService extends AgendamentosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
