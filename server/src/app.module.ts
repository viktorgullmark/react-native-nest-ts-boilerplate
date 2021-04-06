import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      entities: [], // todo: add entities here
      synchronize: true,
      keepConnectionAlive: true,
    }),
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
