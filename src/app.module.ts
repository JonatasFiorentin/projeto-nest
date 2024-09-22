import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/user.entity';
import { UserModule } from './User/user.module';
import { Item } from './Itens/item.entity';
import { ItemModule } from './Itens/item.module';
import { config } from 'dotenv';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPE as 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
      username: 'postgres',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Item],
      autoLoadEntities: true,
      logging: true,
      synchronize: true,
    }),
    UserModule,
    ItemModule,
  ],
})
export class AppModule {}
