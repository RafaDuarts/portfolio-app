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

  private generateSlug(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .replace(/\s+/g, '_');
  }

  async create(data: CreatePortfolioDto, photo: string) {
    const slug = this.generateSlug(data.name);

    const existing = await this.repository.findOne({
      where: { slug },
    });

    if (existing) {
      throw new ConflictException('Já existe um portfólio com esse nome');
    }

    const portfolio = this.repository.create({
      ...data,
      slug,
      photo,
    });

    const saved = await this.repository.save(portfolio);

    const baseUrl = process.env.API_URL || 'http://localhost:4000';

    return {
      ...saved,
      link: `${baseUrl}/portfolio/${saved.slug}`,
    };
  }

  async findBySlug(slug: string) {
    const portfolio = await this.repository.findOne({
      where: { slug },
    });

    if (!portfolio) {
      throw new NotFoundException('Portfólio não encontrado');
    }

    return portfolio;
  }
}