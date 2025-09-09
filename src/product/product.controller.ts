import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}

    @Get()
    @UseGuards(AuthGuard)
    getProducts(){
        return this.productService.getProducts()
    }

    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.productService.getProductById(Number(id))
    }
}
