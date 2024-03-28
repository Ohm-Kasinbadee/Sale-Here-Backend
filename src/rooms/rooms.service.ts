import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rooms } from './rooms.schema';

@Injectable()
export class RoomsService {
  private rooms: Record<string, any> = {};
  constructor(@InjectModel('Rooms') private readonly roomModel: Model<Rooms>) {}

  async createRoom(roomName: string): Promise<void> {
    const existingRoom = await this.roomModel.findOne({ name: roomName });
    if (!existingRoom) {
      const newRoom = new this.roomModel({ name: roomName });
      await newRoom.save();
    }
  }
}
