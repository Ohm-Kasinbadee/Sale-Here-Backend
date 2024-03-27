import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsResolver } from './rooms.resolver';
import { RoomsService } from './rooms.service';
import { Rooms, RoomsSchema } from './rooms.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rooms.name, schema: RoomsSchema }]),
  ],
  providers: [RoomsResolver, RoomsService],
})
export class RoomsModule {}
