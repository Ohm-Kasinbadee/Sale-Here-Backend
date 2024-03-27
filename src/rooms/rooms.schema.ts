import { SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class Rooms {
  @Field()
  name: string;
}

export const RoomsSchema = SchemaFactory.createForClass(Rooms);

export type RoomsDocument = Rooms & Document;
