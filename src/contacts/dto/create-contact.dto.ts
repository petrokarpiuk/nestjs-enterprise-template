import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ContactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().max(50).optional(),
  email: z.string().email().max(50).optional(),
  country: z.string().max(2).optional(),
  region: z.string().max(50).optional(),
  city: z.string().max(50).optional(),
  address: z.string().max(150).optional(),
  postalCode: z.string().max(25).optional(),
});

export class CreateContactDto extends createZodDto(ContactSchema) {}
