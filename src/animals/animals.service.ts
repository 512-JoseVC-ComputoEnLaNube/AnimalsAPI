import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.animalsRepository.create(createAnimalDto);
    return this.animalsRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalsRepository.find({ order: { id: 'ASC' } });
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const animal = await this.animalsRepository.preload({
      id,
      ...updateAnimalDto,
    });

    if (!animal) {
      throw new NotFoundException(`Animal con id ${id} no encontrado`);
    }

    return this.animalsRepository.save(animal);
  }

  async remove(id: number): Promise<void> {
    const result = await this.animalsRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Animal con id ${id} no encontrado`);
    }
  }
}
