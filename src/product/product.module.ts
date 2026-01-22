import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './product.controller';

@Module({
  imports: [ConfigModule],
  controllers: [ProductController],
})
export class ProductModule {}
