import { MessagesService } from './messages.service';
import { VoidResponse } from './dto/void-response.dto';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Message } from './message.model';
import { pubsub } from 'src/pubsub';

@Resolver(() => Message)
export class MessagesResolver {
  constructor(
    @Inject(MessagesService) private messageService: MessagesService,
  ) {}

  @Query(() => [Message])
  async messages(@Args('roomName') roomName: string): Promise<Message[]> {
    return this.messageService.getMessages(roomName);
  }

  @Mutation(() => VoidResponse)
  async sendMessage(
    @Args('roomName') roomName: string,
    @Args('message') message: string,
  ): Promise<VoidResponse> {
    const newMessage = await this.messageService.sendMessage(roomName, message);
    pubsub.publish('newMessage', { newMessage });
    return { successful: true };
  }

  @Subscription(() => Message)
  newMessage(): AsyncIterator<Message> {
    return pubsub.asyncIterator('newMessage');
  }
}
