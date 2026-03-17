import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLostPet1773721632582 implements MigrationInterface {
    name = 'UpdateLostPet1773721632582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lost_pet" ADD "is_active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lost_pet" DROP COLUMN "is_active"`);
    }

}
