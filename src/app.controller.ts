import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly productsService: AppService) {}

  @Get()
  async getAllProducts() {
    return await this.productsService.getProducts();
  }
  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }
}
