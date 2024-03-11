import { Module } from '@nestjs/common';
import { WritterController } from './writter.controller';
import { WritterService } from './writter.service';

@Module({
  controllers: [
    WritterController
  ],
  providers: [
    WritterService,
  ],
  exports: [
    WritterService
  ]
})

export class WritterModule {}
