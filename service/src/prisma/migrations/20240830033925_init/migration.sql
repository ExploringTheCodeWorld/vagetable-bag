-- CreateTable
CREATE TABLE `app_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'active',
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `app_user_phone_key`(`phone`),
    UNIQUE INDEX `app_user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `app_model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `author` VARCHAR(191) NOT NULL,
    `qaCount` INTEGER NOT NULL DEFAULT 0,
    `sound` VARCHAR(191) NULL,
    `language` VARCHAR(191) NOT NULL,
    `isPublic` BOOLEAN NOT NULL DEFAULT true,
    `type` VARCHAR(191) NOT NULL,
    `isPinned` BOOLEAN NOT NULL DEFAULT false,
    `tags` VARCHAR(191) NULL,
    `creatorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `app_user_model` (
    `userId` INTEGER NOT NULL,
    `modelId` INTEGER NOT NULL,

    INDEX `app_user_model_modelId_idx`(`modelId`),
    PRIMARY KEY (`userId`, `modelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `app_model` ADD CONSTRAINT `app_model_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `app_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `app_user_model` ADD CONSTRAINT `app_user_model_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `app_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `app_user_model` ADD CONSTRAINT `app_user_model_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `app_model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
