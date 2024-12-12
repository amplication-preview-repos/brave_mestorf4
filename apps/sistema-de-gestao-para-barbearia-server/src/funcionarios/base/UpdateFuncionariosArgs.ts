/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FuncionariosWhereUniqueInput } from "./FuncionariosWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FuncionariosUpdateInput } from "./FuncionariosUpdateInput";

@ArgsType()
class UpdateFuncionariosArgs {
  @ApiProperty({
    required: true,
    type: () => FuncionariosWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FuncionariosWhereUniqueInput)
  @Field(() => FuncionariosWhereUniqueInput, { nullable: false })
  where!: FuncionariosWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FuncionariosUpdateInput,
  })
  @ValidateNested()
  @Type(() => FuncionariosUpdateInput)
  @Field(() => FuncionariosUpdateInput, { nullable: false })
  data!: FuncionariosUpdateInput;
}

export { UpdateFuncionariosArgs as UpdateFuncionariosArgs };
