### NestJS

```
serve/
├── dist/                      # Compiled files folder
├── node_modules/              # Project dependencies
├── public/                    # Public resources folder
├── src/                       # Source code folder
│   ├── common/                # Common modules
│   │   ├── constants/         # Constants
│   │   ├── dto/               # Data Transfer Objects
│   │   ├── enum/              # Enums
│   │   ├── filters/           # Filters
│   │   ├── guards/            # Guards
│   │   ├── interceptor/       # Interceptors
│   │   ├── utils/             # Utility functions
│   │   └── result.ts          # Result handling
│   ├── config/                # Configuration folder
│   │   ├── dev.yml            # Development environment config
│   │   └── index.ts           # Configuration entry file
│   ├── interface/             # Interface definitions folder
│   ├── modules/               # Modules folder
│   │   ├── mobile/            # Mobile module
│   │   │   ├── auth/          # Authentication module
│   │   │   ├── chat/          # Chat module
│   │   │   ├── generate/      # Generate module
│   │   │   ├── model/         # Data model
│   │   │   ├── user/          # User module
│   │   │   └── mobile.module.ts  # Mobile module entry file
│   │   ├── system/            # System module
│   │   │   ├── minio/         # MinIO file storage module
│   │   │   ├── prisma/        # Prisma ORM module
│   │   │   ├── redis/         # Redis cache module
│   │   │   └── system.module.ts  # System module entry file
│   │   ├── tasks/             # Tasks module
│   │   └── upload/            # Upload module
│   ├── prisma/                # Prisma ORM related files
│   ├── app.module.ts          # Main application module
│   └── main.ts                # Application entry file
├── test/                      # Test folder
├── .env                       # Environment variables config file
├── .eslintrc.js               # ESLint config file
├── .gitignore                 # Git ignore file
├── .prettierrc                # Prettier config file
├── nest-cli.json              # NestJS CLI config file
├── package-lock.json          # Locked dependencies file
├── package.json               # Project config file
├── README.md                  # Project README file
├── tsconfig.build.json        # TypeScript build config file
└── tsconfig.json              # TypeScript config file
```
