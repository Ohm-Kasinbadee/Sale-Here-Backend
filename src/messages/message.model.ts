import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Sender } from './sender.model';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field()
  body: string;

  @Field({ nullable: true })
  image?: string;

  @Field(() => Sender)
  from: Sender;
}
