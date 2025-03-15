import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>)
    {}
 async create(createUserDto:CreateUserDto): Promise<User>{
    const user= await this.userModel.create(createUserDto);
    return user
 } 

 async findAll():Promise<User[]>{
    const users= await this.userModel.find();
    return users
 }

 async findOne(id:string):Promise<User>{
    const user= await this.userModel.findById(id);
    if(!user) throw new NotFoundException('user not found')
    return user
 }

 async update(id:string,updateUserDto:UpdateUserDto):Promise<User>{
   const user= await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true});
   if(!user) throw new NotFoundException('user not found')
   return user
 }


async delete(id:string):Promise<{message:string}>{
   const user= await this.userModel.findByIdAndDelete(id);
   if(!user) throw new NotFoundException('user not found')
   return {message:'user deleted'}
}






}
