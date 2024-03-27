import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { VoidResponse } from 'src/messages/dto/void-response.dto';
import { CreateRoomsInput } from './dto/create-rooms.input';

@Resolver()
export class RoomsResolver {
  constructor(private readonly roomsService: RoomsService) {}

  @Mutation(() => VoidResponse)
  async createRoom(
    @Args('roomName') roomName: CreateRoomsInput,
  ): Promise<VoidResponse> {
    await this.roomsService.create(roomName);
    return { successful: true };
  }
}
