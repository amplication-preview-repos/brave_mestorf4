import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcessosServiceBase } from "./base/acessos.service.base";

@Injectable()
export class AcessosService extends AcessosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
