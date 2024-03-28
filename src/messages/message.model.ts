import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Sender } from 'src/sender/sender.model';

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field()
  body: string;

  @Field({ nullable: true })
  image?: string;

  @Field()
  from: Sender;
}
