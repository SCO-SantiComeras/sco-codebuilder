import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './modules/logger/logger.service';
import { HttpException, HttpStatus, ValidationError, ValidationPipe } from '@nestjs/common';
import { WebsocketAdapter } from './modules/websocket/adapter/websocket-adapter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, 
    { 
      logger: new LoggerService(),
      httpsOptions: undefined
    }
  );

  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const errors = Object.values(validationErrors[0].constraints).join(',');
        const splitErrors: string[] = errors.split(',');
        throw new HttpException(splitErrors[splitErrors.length-1], HttpStatus.BAD_REQUEST);
      },
    }),
  );

  const envOrigin: string = configService.get('websocket.origin');
  let origin: string[] = [];
  if (envOrigin && envOrigin.length > 0) {
    origin = [envOrigin];

    if (envOrigin.includes(',')) {
      origin = envOrigin.split(',');
    }
  }
  
  app.enableCors({
    origin: origin,
    credentials: true,
  });

  app.useWebSocketAdapter(new WebsocketAdapter(app, configService));
  
  const port: number = configService.get('app.port') || 3000;
  const host: string = configService.get('app.host') || 'localhost';

  await app.listen(port);
  console.log(`[bootstrap] App started in 'http://${host}:${port}'`);
}
bootstrap();
