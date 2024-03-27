import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesResolver } from './messages.resolver';
import { MessagesService } from './messages.service';
import { Message, MessageSchema } from './messages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessagesResolver, MessagesService],
})
export class MessagesModule {}
