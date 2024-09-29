Language : us| [cn](./README.zh-cn.md)

## Vegetable Bag APP

A low-fidelity clone of **[Doubao APP](https://www.doubao.com/chat/)** using NestJS.

A **HarmonyOS** version of the frontend may be released in the future.

### Tech Stack

**Backend: NestJS**

- Database: **MySQL**
- Database Access: **Prisma ORM**
- Cache: **Redis**
- File Service: **MinIO**

**Frontend: Uniapp (Vue3)**

- RenderJS
- RequestJS
- Pinia
- Plus API

## Running the Project

### Install Dependencies

```bash
$ npm install
```

### Start the Project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Project Structure

### Uniapp (Vue3)

```
vegetable-bag/
├── .hbuilderx/                # HBuilderX config folder
├── api/                       # API request folder
├── components/                # Vue components folder
├── pages/                     # Pages folder
│   ├── establish/             # Establish page
│   ├── find/                  # Find page
│   ├── index/                 # Index page
│   ├── mine/                  # Mine page
│   ├── notice/                # Notice page
│   └── login.vue              # Login page component
├── scss/                      # SCSS styles folder
├── static/                    # Static resources folder
├── store/                     # Pinia state management folder
├── uni_modules/               # Uni-app modules folder
├── unpackage/                 # Uni-app package folder
├── utils/                     # Utility functions folder
├── App.vue                    # Main application component
├── config.js                  # Configuration file
├── index.html                 # Entry HTML file
├── main.js                    # Main JavaScript entry file
├── manifest.json              # Application configuration file
├── pages.json                 # Pages configuration file
├── uni.promisify.adaptor.js   # Uni-app Promise adapter
└── uni.scss                   # Global SCSS styles
```

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

## Community

![群聊](./image.jpg)

