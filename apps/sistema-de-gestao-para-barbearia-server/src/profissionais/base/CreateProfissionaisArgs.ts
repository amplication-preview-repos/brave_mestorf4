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
import { ProfissionaisCreateInput } from "./ProfissionaisCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateProfissionaisArgs {
  @ApiProperty({
    required: true,
    type: () => ProfissionaisCreateInput,
  })
  @ValidateNested()
  @Type(() => ProfissionaisCreateInput)
  @Field(() => ProfissionaisCreateInput, { nullable: false })
  data!: ProfissionaisCreateInput;
}

export { CreateProfissionaisArgs as CreateProfissionaisArgs };
