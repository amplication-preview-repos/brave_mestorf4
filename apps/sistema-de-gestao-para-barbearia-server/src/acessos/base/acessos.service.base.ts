/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Acessos as PrismaAcessos,
  Funcionarios as PrismaFuncionarios,
} from "@prisma/client";

export class AcessosServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AcessosCountArgs, "select">): Promise<number> {
    return this.prisma.acessos.count(args);
  }

  async acessosItems(
    args: Prisma.AcessosFindManyArgs
  ): Promise<PrismaAcessos[]> {
    return this.prisma.acessos.findMany(args);
  }
  async acessos(
    args: Prisma.AcessosFindUniqueArgs
  ): Promise<PrismaAcessos | null> {
    return this.prisma.acessos.findUnique(args);
  }
  async createAcessos(args: Prisma.AcessosCreateArgs): Promise<PrismaAcessos> {
    return this.prisma.acessos.create(args);
  }
  async updateAcessos(args: Prisma.AcessosUpdateArgs): Promise<PrismaAcessos> {
    return this.prisma.acessos.update(args);
  }
  async deleteAcessos(args: Prisma.AcessosDeleteArgs): Promise<PrismaAcessos> {
    return this.prisma.acessos.delete(args);
  }

  async getFuncionario(parentId: string): Promise<PrismaFuncionarios | null> {
    return this.prisma.acessos
      .findUnique({
        where: { id: parentId },
      })
      .funcionario();
  }
}
