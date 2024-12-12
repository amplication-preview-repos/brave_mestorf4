import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProdutosServiceBase } from "./base/produtos.service.base";

@Injectable()
export class ProdutosService extends ProdutosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
