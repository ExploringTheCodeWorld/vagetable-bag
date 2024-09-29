import { Controller, Get, Post, Body, Delete, Param, Req, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { AppUser, Prisma } from '@prismaClient';
import { LoginDto, UpdateUserInfoDto } from './dto/user.dto';
import { Request } from 'express';
@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }
  @Post('logout')
  async logout(@Req() req:Request ){
    return this.userService.logout(req);
  }
  @Post('userInfo')
  async userInfo(@Req() req:Request ){
    return this.userService.userInfo(req);
  }
  @Put('userInfo')
  async updateUserInfo(@Req() req:Request,@Body() body:UpdateUserInfoDto){
    return this.userService.updateUserInfo(req,body);
  }
//   @Post()
//   async create( @Body() postData:AppUser ) {
//     console.log('postData',postData);
    
//     this.userService.create(postData);
//   }
// @Delete(':id')
// async delete(@Param('id') id: string):Promise<AppUser>{
//   console.log('id',id);
  
//   return this.userService.deleteUser({id:Number(id)});
// }
//   @Get()
//   async findAll(){
//     return this.userService.findAll();
//   }
}