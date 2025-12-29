import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ length: 50, nullable: true })
  phone: string;

  @Column({ length: 50, nullable: true })
  email: string;

  @Column({ length: 2, nullable: true })
  country: string;

  @Column({ length: 50, nullable: true })
  region: string;

  @Column({ length: 50, nullable: true })
  city: string;

  @Column({ length: 150, nullable: true })
  address: string;

  @Column({ length: 25, nullable: true })
  postalCode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
