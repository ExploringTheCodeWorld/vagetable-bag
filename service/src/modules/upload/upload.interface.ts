export interface CustomFile extends Express.Multer.File {
    savedFilename?: string;
  }