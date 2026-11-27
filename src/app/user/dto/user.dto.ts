import { IsOptional, MinLength, IsString, MaxLength } from "class-validator";

export class UpdateUserDTO {
  @IsOptional()
  @MinLength(10)
  @MaxLength(11)
  phone!: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  name!: string;
}
