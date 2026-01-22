import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDTO } from './dto/find-product.dto';
import { ConfigService } from '@nestjs/config';

@Controller('product')
export class ProductController {
    constructor( private readonly configService: ConfigService){}

    @Post('create')
    async create(@Body() dto: Omit<ProductController, '_id'>){
        // this.configService.get('TEST') // пример получения переменной env

    }

    @Get(':id')
    async get(@Param('id') id: string){

    }

    @Delete(':id')
    async delete(@Param('id') id:string){

    }

    @Patch(':id')
    async patch(@Param('id') id:string, @Body() dto: ProductController){
        
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDTO){
        
    }

}
