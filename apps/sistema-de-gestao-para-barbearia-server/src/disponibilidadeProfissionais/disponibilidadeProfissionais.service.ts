import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DisponibilidadeProfissionaisServiceBase } from "./base/disponibilidadeProfissionais.service.base";

@Injectable()
export class DisponibilidadeProfissionaisService extends DisponibilidadeProfissionaisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
