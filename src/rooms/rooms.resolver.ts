import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { VoidResponse } from 'src/messages/dto/void-response.dto';
import { Inject } from '@nestjs/common';

@Resolver()
export class RoomsResolver {
  constructor(@Inject(RoomsService) private roomService: RoomsService) {}

  @Mutation(() => VoidResponse)
  async createRoom(@Args('roomName') roomName: string): Promise<VoidResponse> {
    await this.roomService.createRoom(roomName);
    return { successful: true };
  }
}
