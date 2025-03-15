import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return []
    }
    
    @Get('interns')
    findInterns() {
        return []
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return { id }
    }

    @Post()
    create(@Body() users:{}){
        return users
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() users:{}){
        return { id, ...users }
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return { id }
    }

}
