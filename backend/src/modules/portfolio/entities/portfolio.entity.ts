import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  photo: string;

  @Column()
  linkedin: string;

  @Column({ nullable: true })
  facebook?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  instagram?: string;
}