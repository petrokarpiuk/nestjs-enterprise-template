import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './controllers/contacts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [DatabaseModule, TypeOrmModule.forFeature([Contact])],
  exports: [TypeOrmModule],
})
export class ContactsModule {}
