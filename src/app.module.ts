import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CoursesModule],
})
export class AppModule {}
