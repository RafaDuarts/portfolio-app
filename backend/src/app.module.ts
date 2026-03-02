import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioModule } from './modules/portfolio/portfolio.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'portfolio_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PortfolioModule,
  ],
})
export class AppModule {}