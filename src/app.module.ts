import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CommonModule } from './common/common.module';
import Joi = require('@hapi/joi');
import appConfig from './config/app.config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ 
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: '.environment',
      load: [appConfig]
    }),
    // ConfigModule.forRoot(
    //   {
    //     envFilePath: '.environment',
    //     validationSchema: Joi.object({
    //       DATABASE_HOST: Joi.required(),
    //       DATABASE_PORT: Joi.number().default(5432),
    //     }),
    //   }
    // ),
    CoffeesModule,
    CommonModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.DATABASE_HOST,
    //   port: +process.env.DATABASE_PORT,
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   // type: 'postgres', // type of our database
    //   // host: 'localhost', // database host
    //   // port: 5432, // database host
    //   // username: 'postgres', // username
    //   // password: 'pass123', // user password
    //   // database: 'postgres', // name of our database,
    //   // autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
    //   // synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
    // }),
    // CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}