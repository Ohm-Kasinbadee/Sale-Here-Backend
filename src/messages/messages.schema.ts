import { SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Sender } from 'src/sender/sender.schema';

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

export const MessageSchema = SchemaFactory.createForClass(Message);

export type MessageDocument = Message & Document;
