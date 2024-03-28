import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateRoomsInput {
  @Field(() => String)
  @IsString()
  body: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  image?: string;

  @Field(() => String)
  @IsString()
  from: string;
}
