import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1788157684281 implements MigrationInterface {
    name = 'InitialSchema1788157684281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animals" ("id" SERIAL NOT NULL, "nombre" text NOT NULL, "especie" text NOT NULL, "raza" text, "edad" integer NOT NULL, "peso" double precision NOT NULL, CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "animals"`);
    }

}
