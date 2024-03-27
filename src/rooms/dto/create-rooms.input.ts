import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateRoomsInput {
  @Field(() => String)
  @IsString()
  name: string;
}
