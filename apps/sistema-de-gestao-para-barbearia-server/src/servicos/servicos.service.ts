import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServicosServiceBase } from "./base/servicos.service.base";

@Injectable()
export class ServicosService extends ServicosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
