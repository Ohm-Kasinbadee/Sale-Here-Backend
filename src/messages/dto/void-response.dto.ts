import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class VoidResponse {
  @Field(() => Boolean)
  successful: boolean;
}
