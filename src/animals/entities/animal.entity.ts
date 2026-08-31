import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text' })
  especie: string;

  @Column({ type: 'text', nullable: true })
  raza?: string | null;

  @Column({ type: 'integer' })
  edad: number;

  @Column({ type: 'double precision' })
  peso: number;
}
