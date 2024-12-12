/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DisponibilidadeProfissionaisService } from "../disponibilidadeProfissionais.service";
import { DisponibilidadeProfissionaisCreateInput } from "./DisponibilidadeProfissionaisCreateInput";
import { DisponibilidadeProfissionais } from "./DisponibilidadeProfissionais";
import { DisponibilidadeProfissionaisFindManyArgs } from "./DisponibilidadeProfissionaisFindManyArgs";
import { DisponibilidadeProfissionaisWhereUniqueInput } from "./DisponibilidadeProfissionaisWhereUniqueInput";
import { DisponibilidadeProfissionaisUpdateInput } from "./DisponibilidadeProfissionaisUpdateInput";

export class DisponibilidadeProfissionaisControllerBase {
  constructor(
    protected readonly service: DisponibilidadeProfissionaisService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DisponibilidadeProfissionais })
  async createDisponibilidadeProfissionais(
    @common.Body() data: DisponibilidadeProfissionaisCreateInput
  ): Promise<DisponibilidadeProfissionais> {
    return await this.service.createDisponibilidadeProfissionais({
      data: data,
      select: {
        createdAt: true,
        horarioFim: true,
        horarioInicio: true,
        id: true,
        profissional: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DisponibilidadeProfissionais] })
  @ApiNestedQuery(DisponibilidadeProfissionaisFindManyArgs)
  async disponibilidadeProfissionaisItems(
    @common.Req() request: Request
  ): Promise<DisponibilidadeProfissionais[]> {
    const args = plainToClass(
      DisponibilidadeProfissionaisFindManyArgs,
      request.query
    );
    return this.service.disponibilidadeProfissionaisItems({
      ...args,
      select: {
        createdAt: true,
        horarioFim: true,
        horarioInicio: true,
        id: true,
        profissional: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DisponibilidadeProfissionais })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async disponibilidadeProfissionais(
    @common.Param() params: DisponibilidadeProfissionaisWhereUniqueInput
  ): Promise<DisponibilidadeProfissionais | null> {
    const result = await this.service.disponibilidadeProfissionais({
      where: params,
      select: {
        createdAt: true,
        horarioFim: true,
        horarioInicio: true,
        id: true,
        profissional: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DisponibilidadeProfissionais })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDisponibilidadeProfissionais(
    @common.Param() params: DisponibilidadeProfissionaisWhereUniqueInput,
    @common.Body() data: DisponibilidadeProfissionaisUpdateInput
  ): Promise<DisponibilidadeProfissionais | null> {
    try {
      return await this.service.updateDisponibilidadeProfissionais({
        where: params,
        data: data,
        select: {
          createdAt: true,
          horarioFim: true,
          horarioInicio: true,
          id: true,
          profissional: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DisponibilidadeProfissionais })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDisponibilidadeProfissionais(
    @common.Param() params: DisponibilidadeProfissionaisWhereUniqueInput
  ): Promise<DisponibilidadeProfissionais | null> {
    try {
      return await this.service.deleteDisponibilidadeProfissionais({
        where: params,
        select: {
          createdAt: true,
          horarioFim: true,
          horarioInicio: true,
          id: true,
          profissional: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
