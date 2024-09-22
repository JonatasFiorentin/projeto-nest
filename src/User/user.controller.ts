import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.services';
import { User } from './user.entity';
import { CreateUserDto } from './userDto';

@Controller('users')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    this.userService.update(id, createUserDto);
    return;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.userService.delete(id);
    return;
  }
}
