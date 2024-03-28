import { Module } from '@nestjs/common';
import { SenderResolver } from './sender.resolver';
import { SenderService } from './sender.service';

@Module({
  providers: [SenderResolver, SenderService],
})
export class SenderModule {}
