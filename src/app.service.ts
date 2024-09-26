import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AppService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    console.log(supabaseKey,supabaseUrl)
      this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async getProducts() {
    const { data, error } = await this.supabase
      .from('ProductData')
      .select('id, price, name, image, weight, description');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
  getHello(): string {
    return 'Hello World!';
  }
  async getCategory(){
    const {data, error} = await this.supabase.from('Category').select('id, name');
    if (error){
      throw new Error(error.message);
    }
    return data; 
  }
}
