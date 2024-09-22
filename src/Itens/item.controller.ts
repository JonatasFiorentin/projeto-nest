import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.services';
import { ItemDto } from './itemDto';
import { Item } from './item.entity';

@Controller('itens')
export class ItemController {
  constructor(readonly itemService: ItemService) {}

  @Post()
  async create(@Body() ItemDto: ItemDto): Promise<Item> {
    return this.itemService.create(ItemDto);
  }
  @Get()
  async findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() itemDto: ItemDto) {
    return this.itemService.update(id, itemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itemService.delete(id);
  }
}
