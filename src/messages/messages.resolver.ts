import { Message } from './messages.schema';
import { MessagesService } from './messages.service';
import { VoidResponse } from './dto/void-response.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Query(() => [Message])
  async messages(@Args('roomName') roomName: string): Promise<Message[]> {
    return this.messagesService.findAll(roomName);
  }

  @Mutation(() => VoidResponse)
  async sendMessage(
    @Args('roomName') roomName: string,
    @Args('message') message: string,
  ): Promise<VoidResponse> {
    await this.messagesService.create(roomName, message);
    return { successful: true };
  }
}
