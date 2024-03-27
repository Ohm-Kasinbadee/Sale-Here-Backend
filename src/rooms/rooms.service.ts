import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rooms, RoomsDocument } from './rooms.schema';
import { CreateRoomsInput } from './dto/create-rooms.input';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Rooms.name) private roomsModel: Model<RoomsDocument>,
  ) {}

  async create(roomName: CreateRoomsInput): Promise<Rooms> {
    const createdMessage = new this.roomsModel(roomName);
    return createdMessage.save();
  }
}
