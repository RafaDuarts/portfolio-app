import {
  IsString,
  IsEmail,
  IsUrl,
  IsOptional,
  Matches,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePortfolioDto {
  @ApiProperty({
    example: 'Rafael test',
    description: 'Nome do portfólio (exibido publicamente)',
  })
  @IsString({ message: 'O nome deve ser um texto válido' })
  @MinLength(3, {
    message: 'O nome deve ter pelo menos 3 caracteres',
  })
  name: string;

  @ApiProperty({
    example: 'test@email.com',
    description: 'Email para contato',
  })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @ApiProperty({
    example: 'Desenvolvedor Full Stack especializado em NestJS e React.',
    description: 'Descrição profissional',
  })
  @IsString()
  @MinLength(10, {
    message: 'A descrição deve ter pelo menos 10 caracteres',
  })
  description: string;

  @ApiProperty({
    example: 'https://linkedin.com/',
    description: 'URL do perfil no LinkedIn',
  })
  @IsUrl({}, { message: 'LinkedIn deve ser uma URL válida' })
  linkedin: string;

  @ApiPropertyOptional({
    example: 'https://facebook.com/',
    description: 'URL do perfil no Facebook',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Facebook deve ser uma URL válida' })
  facebook?: string;

  @ApiPropertyOptional({
    example: 'https://twitter.com/',
    description: 'URL do perfil no Twitter/X',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Twitter deve ser uma URL válida' })
  twitter?: string;

  @ApiPropertyOptional({
    example: 'https://instagram.com/',
    description: 'URL do perfil no Instagram',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Instagram deve ser uma URL válida' })
  instagram?: string;
}