import { Resolver } from '@nestjs/graphql';
import { Sender } from './sender.schema';

@Resolver(() => Sender)
export class SenderResolver {}
