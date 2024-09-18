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
  Servicos as PrismaServicos,
  Agendamentos as PrismaAgendamentos,
} from "@prisma/client";

export class ServicosServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ServicosCountArgs, "select">): Promise<number> {
    return this.prisma.servicos.count(args);
  }

  async servicosItems(
    args: Prisma.ServicosFindManyArgs
  ): Promise<PrismaServicos[]> {
    return this.prisma.servicos.findMany(args);
  }
  async servicos(
    args: Prisma.ServicosFindUniqueArgs
  ): Promise<PrismaServicos | null> {
    return this.prisma.servicos.findUnique(args);
  }
  async createServicos(
    args: Prisma.ServicosCreateArgs
  ): Promise<PrismaServicos> {
    return this.prisma.servicos.create(args);
  }
  async updateServicos(
    args: Prisma.ServicosUpdateArgs
  ): Promise<PrismaServicos> {
    return this.prisma.servicos.update(args);
  }
  async deleteServicos(
    args: Prisma.ServicosDeleteArgs
  ): Promise<PrismaServicos> {
    return this.prisma.servicos.delete(args);
  }

  async findAgendamentosItems(
    parentId: string,
    args: Prisma.AgendamentosFindManyArgs
  ): Promise<PrismaAgendamentos[]> {
    return this.prisma.servicos
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .agendamentosItems(args);
  }
}
