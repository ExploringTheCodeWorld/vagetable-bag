/*
  Warnings:

  - The primary key for the `app_model` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `isPinned` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `isPublic` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `app_model` table. All the data in the column will be lost.
  - You are about to drop the column `qaCount` on the `app_model` table. All the data in the column will be lost.
  - The primary key for the `app_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avatar` on the `app_user` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `app_user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `app_user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `app_user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `app_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_nickname]` on the table `app_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creator_id` to the `app_model` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model_id` to the `app_model` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `app_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `app_model_creatorId_fkey` ON `app_model`;

-- DropIndex
DROP INDEX `app_user_username_key` ON `app_user`;

-- AlterTable
ALTER TABLE `app_model` DROP PRIMARY KEY,
    DROP COLUMN `author`,
    DROP COLUMN `creatorId`,
    DROP COLUMN `description`,
    DROP COLUMN `id`,
    DROP COLUMN `image`,
    DROP COLUMN `isPinned`,
    DROP COLUMN `isPublic`,
    DROP COLUMN `name`,
    DROP COLUMN `qaCount`,
    ADD COLUMN `creator_id` INTEGER NOT NULL,
    ADD COLUMN `is_pinned` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `is_public` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `model_description` VARCHAR(191) NULL,
    ADD COLUMN `model_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `model_image` VARCHAR(191) NULL,
    ADD COLUMN `model_name` VARCHAR(191) NULL,
    ADD COLUMN `model_qa_count` INTEGER NULL DEFAULT 0,
    MODIFY `language` VARCHAR(191) NULL,
    MODIFY `type` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`model_id`);

-- AlterTable
ALTER TABLE `app_user` DROP PRIMARY KEY,
    DROP COLUMN `avatar`,
    DROP COLUMN `gender`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `username`,
    ADD COLUMN `userId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `user_avatar` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `user_gender` VARCHAR(191) NULL,
    ADD COLUMN `user_nickname` VARCHAR(191) NULL,
    MODIFY `status` VARCHAR(191) NULL DEFAULT '1',
    MODIFY `password` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `app_user_user_nickname_key` ON `app_user`(`user_nickname`);

-- AddForeignKey
ALTER TABLE `app_model` ADD CONSTRAINT `app_model_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `app_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `app_user_model` ADD CONSTRAINT `app_user_model_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `app_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `app_user_model` ADD CONSTRAINT `app_user_model_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `app_model`(`model_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
