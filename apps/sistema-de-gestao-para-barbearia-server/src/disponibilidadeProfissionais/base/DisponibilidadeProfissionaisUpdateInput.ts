/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumDisponibilidadeProfissionaisStatus } from "./EnumDisponibilidadeProfissionaisStatus";

@InputType()
class DisponibilidadeProfissionaisUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  horarioFim?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  horarioInicio?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profissional?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDisponibilidadeProfissionaisStatus,
  })
  @IsEnum(EnumDisponibilidadeProfissionaisStatus)
  @IsOptional()
  @Field(() => EnumDisponibilidadeProfissionaisStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DisponibilidadeProfissionaisUpdateInput as DisponibilidadeProfissionaisUpdateInput };
