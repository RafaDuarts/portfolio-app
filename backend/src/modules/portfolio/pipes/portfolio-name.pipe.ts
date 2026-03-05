import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PortfolioNamePipe implements PipeTransform<string, string> {
  transform(value: string) {
    const valid = /^[a-z0-9_]+$/.test(value);

    if (!valid) {
      throw new BadRequestException(
        'O nome deve estar no formato: Nome Completo Exemplo',
      );
    }

    return value;
  }
}