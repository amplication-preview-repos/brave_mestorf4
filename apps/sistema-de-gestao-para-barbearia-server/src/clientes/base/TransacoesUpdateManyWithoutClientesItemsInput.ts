/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TransacoesWhereUniqueInput } from "../../transacoes/base/TransacoesWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TransacoesUpdateManyWithoutClientesItemsInput {
  @Field(() => [TransacoesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransacoesWhereUniqueInput],
  })
  connect?: Array<TransacoesWhereUniqueInput>;

  @Field(() => [TransacoesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransacoesWhereUniqueInput],
  })
  disconnect?: Array<TransacoesWhereUniqueInput>;

  @Field(() => [TransacoesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransacoesWhereUniqueInput],
  })
  set?: Array<TransacoesWhereUniqueInput>;
}

export { TransacoesUpdateManyWithoutClientesItemsInput as TransacoesUpdateManyWithoutClientesItemsInput };
