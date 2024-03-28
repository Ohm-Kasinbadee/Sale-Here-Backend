import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rooms {
  @Prop({ required: true, unique: true })
  name: string;
}

export const RoomsSchema = SchemaFactory.createForClass(Rooms);

export type RoomDocument = Rooms & Document;
