import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MensagensServiceBase } from "./base/mensagens.service.base";

@Injectable()
export class MensagensService extends MensagensServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
