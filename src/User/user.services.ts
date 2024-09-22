import {
  Body,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './userDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    return this.userRepository.update(id, createUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userRepository.delete(id);
  }
}
