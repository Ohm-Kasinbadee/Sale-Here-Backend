import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Sender } from 'src/sender/sender.schema';

@Schema()
export class Message {
  @Prop({ required: true })
  body: string;

  @Prop()
  image?: string;

  @Prop({ required: true })
  from: Sender;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

export type MessageDocument = Message & Document;
