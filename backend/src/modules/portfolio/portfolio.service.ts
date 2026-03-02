import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly repository: Repository<Portfolio>,
  ) {}

  async create(data: CreatePortfolioDto, photo: string) {
    const existing = await this.repository.findOne({
      where: { name: data.name },
    });

    if (existing) {
      throw new ConflictException('Nome já cadastrado');
    }

    const portfolio = this.repository.create({
      ...data,
      photo,
    });

    const saved = await this.repository.save(portfolio);

    return {
      ...saved,
      link: `http://localhost:4000/portfolio/${saved.name}`,
    };
  }

  async findByName(name: string) {
    const portfolio = await this.repository.findOne({
      where: { name },
    });

    if (!portfolio) {
      throw new NotFoundException('Portfólio não encontrado');
    }

    return portfolio;
  }
}