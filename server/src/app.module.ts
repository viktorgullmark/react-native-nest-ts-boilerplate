import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './google/google.strategy';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host:
        process.env.BUILD_ENV === 'dev'
          ? process.env.DEV_DB_HOST
          : process.env.PROD_DB_HOST,
      database:
        process.env.BUILD_ENV === 'dev'
          ? process.env.DEV_DB_DATABASE
          : process.env.PROD_DB_DATABASE,
      entities: [], // todo: add entities here
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleService, GoogleStrategy],
})
export class AppModule {}
