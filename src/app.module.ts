import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
})
export class AppModule {}
