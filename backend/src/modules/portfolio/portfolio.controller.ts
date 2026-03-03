import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';

@ApiTags('Portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly service: PortfolioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo portfólio com upload de foto' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Dados para criação do portfólio',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'rafael_duarte' },
        email: { type: 'string', example: 'test@email.com' },
        description: {
          type: 'string',
          example: 'Desenvolvedor Full Stack especializado em NestJS e React.',
        },
        linkedin: {
          type: 'string',
          example: 'https://linkedin.com/',
        },
        facebook: {
          type: 'string',
          example: 'https://facebook.com/',
        },
        twitter: {
          type: 'string',
          example: 'https://twitter.com/',
        },
        instagram: {
          type: 'string',
          example: 'https://instagram.com/',
        },
        photo: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['name', 'email', 'description', 'linkedin', 'photo'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Portfólio criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads'),
        filename: (req, file, callback) => {
          const uniqueName =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueName + extname(file.originalname));
        },
      }),
    }),
  )
  async create(
    @Body() body: CreatePortfolioDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Foto é obrigatória');
    }

    return this.service.create(body, `uploads/${file.filename}`);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Buscar portfólio pelo nome' })
  @ApiParam({
    name: 'name',
    description:
      'Nome do portfólio (apenas letras minúsculas, números e underline)',
    example: 'rafael_duarte',
  })
  @ApiResponse({
    status: 200,
    description: 'Portfólio encontrado',
  })
  @ApiResponse({
    status: 404,
    description: 'Portfólio não encontrado',
  })
  async find(@Param('slug') slug: string) {
    return this.service.findBySlug(slug);
  }
}