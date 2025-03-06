import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  

  const port = process.env.PORT || 3000; // Sử dụng giá trị từ .env
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
