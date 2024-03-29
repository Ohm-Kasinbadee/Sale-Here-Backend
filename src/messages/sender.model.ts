import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Sender {
  @Field()
  name: string;
}
