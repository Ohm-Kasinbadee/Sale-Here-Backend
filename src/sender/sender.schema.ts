import { SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class Sender {
  @Field()
  name: string;
}

export const SenderSchema = SchemaFactory.createForClass(Sender);

export type SenderDocument = Sender & Document;
