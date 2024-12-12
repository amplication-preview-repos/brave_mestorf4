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
import { AcessosWhereUniqueInput } from "./AcessosWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AcessosUpdateInput } from "./AcessosUpdateInput";

@ArgsType()
class UpdateAcessosArgs {
  @ApiProperty({
    required: true,
    type: () => AcessosWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AcessosWhereUniqueInput)
  @Field(() => AcessosWhereUniqueInput, { nullable: false })
  where!: AcessosWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AcessosUpdateInput,
  })
  @ValidateNested()
  @Type(() => AcessosUpdateInput)
  @Field(() => AcessosUpdateInput, { nullable: false })
  data!: AcessosUpdateInput;
}

export { UpdateAcessosArgs as UpdateAcessosArgs };
