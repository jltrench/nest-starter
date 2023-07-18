import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1689687914491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "name" to "course"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "course" to "name"`,
    );
  }
}
