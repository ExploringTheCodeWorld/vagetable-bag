-- DropIndex
DROP INDEX `app_model_creator_id_fkey` ON `app_model`;

-- AddForeignKey
ALTER TABLE `app_model` ADD CONSTRAINT `app_model_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `app_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `app_user_model` ADD CONSTRAINT `app_user_model_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `app_user`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `app_user_model` ADD CONSTRAINT `app_user_model_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `app_model`(`model_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
