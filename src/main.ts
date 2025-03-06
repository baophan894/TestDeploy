import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ; // Đảm bảo có giá trị mặc định nếu PORT không được cung cấp
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
