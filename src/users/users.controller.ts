import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto){
      return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(){
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
    return this.usersService.update(id,updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id:string){
    return this.usersService.delete(id);
  }
}

