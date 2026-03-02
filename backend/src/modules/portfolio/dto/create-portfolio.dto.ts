import {
  IsString,
  IsEmail,
  IsUrl,
  IsOptional,
  Matches,
} from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  @Matches(/^[a-z0-9_]+$/, {
    message:
      'O nome deve estar no formato: nome_completo_exemplo (apenas letras minúsculas, números e underline)',
  })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsUrl()
  linkedin: string;

  @IsOptional()
  @IsUrl()
  facebook?: string;

  @IsOptional()
  @IsUrl()
  twitter?: string;

  @IsOptional()
  @IsUrl()
  instagram?: string;
}