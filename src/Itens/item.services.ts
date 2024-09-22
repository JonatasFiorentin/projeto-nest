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
import { Item } from './item.entity';
import { Repository } from 'typeorm';
import { ItemDto } from './itemDto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }
  @Get()
  findOne(id: number): Promise<Item> {
    return this.itemRepository.findOne({
      where: { id },
    });
  }
  @Post()
  async create(@Body() itemDto: ItemDto): Promise<Item> {
    return this.itemRepository.save(itemDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() itemDto: ItemDto) {
    return this.itemRepository.update(id, itemDto);
  }

  @Delete(':id')
  async delete(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
