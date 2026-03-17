import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFoundPet1773700652965 implements MigrationInterface {
    name = 'UpdateFoundPet1773700652965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "found_pet" RENAME COLUMN "lost_date" TO "found_date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "found_pet" RENAME COLUMN "found_date" TO "lost_date"`);
    }

}
