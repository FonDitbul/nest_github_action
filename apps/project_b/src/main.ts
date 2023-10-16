import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { add } from '@packages/utils';
import { User } from '@packages/interfaces';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const user: User = {
    createdAt: undefined,
    id: 0,
    name: '',
    updatedAt: undefined,
  };
  await app.listen(3000);
}
bootstrap();
