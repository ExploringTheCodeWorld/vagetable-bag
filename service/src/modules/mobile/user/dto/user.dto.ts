import { IsString, IsNotEmpty,IsOptional} from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
export class UpdateUserInfoDto {  
  @IsString()
  @IsOptional()
  nickName: string;

  @IsString()
  @IsOptional()
  userAvatar: string;
}

