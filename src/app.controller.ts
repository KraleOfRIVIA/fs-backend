import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly productsService: AppService) {}

  @Get('all')
  async getAllProducts() {
    return await this.productsService.getProducts();
  }
  @Get('test')
  getHello(): string {
    return this.productsService.getHello();
  }
  @Get('categories')
  getCategory(){
    return this.productsService.getCategory();
  }
}
