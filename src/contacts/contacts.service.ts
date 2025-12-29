import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions } from 'nestjs-typeorm-paginate';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  create(createContactDto: CreateContactDto) {
    return this.contactRepository.save(createContactDto);
  }

  findAll() {
    return this.contactRepository.find();
  }

  findPaginated(options: IPaginationOptions) {
    return paginate(this.contactRepository, {
      limit: options.limit,
      page: options.page,
    });
  }

  findOne(id: number) {
    return this.contactRepository.findOneBy({ id });
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return this.contactRepository.save({
      id,
      ...updateContactDto,
    });
  }

  async remove(id: number) {
    await this.contactRepository.delete(id);
  }
}
