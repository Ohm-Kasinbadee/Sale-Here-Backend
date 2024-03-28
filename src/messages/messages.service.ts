import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Message } from './message.model';

@Injectable()
export class MessagesService {
  private messages: Record<string, Message[]> = {};

  async getMessages(roomName: string): Promise<Message[]> {
    return this.messages[roomName] || [];
  }

  async sendMessage(
    roomName: string,
    messageBody: string,
    image?: string,
  ): Promise<Message> {
    const newMessage: Message = {
      id: uuidv4(),
      body: messageBody,
      image: image || null,
      from: {
        name: 'Sender Name',
      },
    };
    this.messages[roomName] = [...(this.messages[roomName] || []), newMessage];
    return newMessage;
  }
}
