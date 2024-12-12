import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FuncionariosServiceBase } from "./base/funcionarios.service.base";

@Injectable()
export class FuncionariosService extends FuncionariosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
