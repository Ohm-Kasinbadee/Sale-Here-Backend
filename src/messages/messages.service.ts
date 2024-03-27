import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './messages.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async findAll(roomName: string): Promise<Message[]> {
    return this.messageModel.find({ roomName }).exec();
  }

  async create(roomName: string, body: string): Promise<Message> {
    const from = 'a';
    const image = 'aaa';
    const createdMessage = new this.messageModel({
      roomName,
      body,
      from,
      image,
    });
    return createdMessage.save();
  }
}
