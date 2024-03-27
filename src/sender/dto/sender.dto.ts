import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SenderInput {
  @Field(() => String)
  name: string;
}
