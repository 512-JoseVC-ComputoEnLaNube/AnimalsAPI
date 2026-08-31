import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
    return this.animalsService.create(createAnimalDto);
  }

  @Get()
  findAll(): Promise<Animal[]> {
    return this.animalsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ): Promise<Animal> {
    return this.animalsService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.animalsService.remove(id);
  }
}
