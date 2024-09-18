import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfissionaisServiceBase } from "./base/profissionais.service.base";

@Injectable()
export class ProfissionaisService extends ProfissionaisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
