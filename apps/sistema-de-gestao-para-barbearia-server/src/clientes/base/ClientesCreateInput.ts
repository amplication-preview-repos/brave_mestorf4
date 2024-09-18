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
import { AgendamentosCreateNestedManyWithoutClientesItemsInput } from "./AgendamentosCreateNestedManyWithoutClientesItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { TransacoesCreateNestedManyWithoutClientesItemsInput } from "./TransacoesCreateNestedManyWithoutClientesItemsInput";

@InputType()
class ClientesCreateInput {
  @ApiProperty({
    required: false,
    type: () => AgendamentosCreateNestedManyWithoutClientesItemsInput,
  })
  @ValidateNested()
  @Type(() => AgendamentosCreateNestedManyWithoutClientesItemsInput)
  @IsOptional()
  @Field(() => AgendamentosCreateNestedManyWithoutClientesItemsInput, {
    nullable: true,
  })
  agendamentosItems?: AgendamentosCreateNestedManyWithoutClientesItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dataNascimento?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

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
  nome?: string | null;

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
  telefone?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransacoesCreateNestedManyWithoutClientesItemsInput,
  })
  @ValidateNested()
  @Type(() => TransacoesCreateNestedManyWithoutClientesItemsInput)
  @IsOptional()
  @Field(() => TransacoesCreateNestedManyWithoutClientesItemsInput, {
    nullable: true,
  })
  transacoesItems?: TransacoesCreateNestedManyWithoutClientesItemsInput;
}

export { ClientesCreateInput as ClientesCreateInput };
