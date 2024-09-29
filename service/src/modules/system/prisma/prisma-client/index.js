
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.0
 * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
 */
Prisma.prismaVersion = {
  client: "5.19.0",
  engine: "5fe21811a6ba0b952a3bc71400666511fe3b902f"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AppUserScalarFieldEnum = {
  userId: 'userId',
  userAvatar: 'userAvatar',
  userGender: 'userGender',
  phone: 'phone',
  status: 'status',
  nickName: 'nickName',
  code: 'code',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  delStatus: 'delStatus'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.AppModelScalarFieldEnum = {
  modelId: 'modelId',
  modelImage: 'modelImage',
  modelName: 'modelName',
  modelDescription: 'modelDescription',
  introduce: 'introduce',
  modelQaCount: 'modelQaCount',
  sound: 'sound',
  language: 'language',
  prologue: 'prologue',
  isPublic: 'isPublic',
  type: 'type',
  tags: 'tags',
  enableBackground: 'enableBackground',
  backgroundImage: 'backgroundImage',
  isAiImage: 'isAiImage',
  creatorId: 'creatorId',
  creatorName: 'creatorName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  delStatus: 'delStatus'
};

exports.Prisma.AppUserModelScalarFieldEnum = {
  userId: 'userId',
  modelId: 'modelId',
  isPinned: 'isPinned',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChatRecordScalarFieldEnum = {
  id: 'id',
  userModelUserId: 'userModelUserId',
  userModelModelId: 'userModelModelId',
  message: 'message',
  role: 'role',
  createdAt: 'createdAt',
  delStatus: 'delStatus'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  AppUser: 'AppUser',
  AppModel: 'AppModel',
  AppUserModel: 'AppUserModel',
  ChatRecord: 'ChatRecord'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "F:\\my project\\serve\\src\\modules\\system\\prisma\\prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "views",
      "relationJoins",
      "prismaSchemaFolder",
      "omitApi"
    ],
    "sourceFilePath": "F:\\my project\\serve\\src\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../../prisma",
  "clientVersion": "5.19.0",
  "engineVersion": "5fe21811a6ba0b952a3bc71400666511fe3b902f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  engineType      = \"library\"\n  binaryTargets   = [\"native\"]\n  previewFeatures = [\"views\", \"relationJoins\", \"prismaSchemaFolder\", \"omitApi\"]\n  output          = \"../modules/system/prisma/prisma-client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel AppUser {\n  userId     Int      @id @default(autoincrement()) // 用户id\n  userAvatar String?  @default(\"/image/default-man.jpg\") @map(\"user_avatar\") // 用户头像地址\n  userGender String?  @default(\"1\") @map(\"user_gender\") // 性别  1 男 2 女 3 未知\n  phone      String?  @unique //手机号码\n  status     String?  @default(\"1\") // 登录状态   1在线，2离线\n  nickName   String?  @unique @map(\"nick_name\") // 昵称\n  code       String?  @map(\"code\") // 验证码\n  password   String? //密码\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n  delStatus  String?  @default(\"1\") @map(\"del_status\") // 删除状态  1正常 2删除\n\n  models        AppUserModel[]\n  createdModels AppModel[]     @relation(\"UserCreatedModels\")\n\n  @@map(\"app_user\")\n}\n\nmodel AppModel {\n  modelId          Int      @id @default(autoincrement()) @map(\"model_id\")\n  modelImage       String?  @default(\"/vegetable-bag/ai.jpg\") @map(\"model_image\") //模型头像\n  modelName        String?  @map(\"model_name\") //模型名称\n  modelDescription String?  @map(\"model_description\") //模型描述\n  introduce        String?  @map(\"introduce\") //模型介绍\n  modelQaCount     Int?     @default(0) @map(\"model_qa_count\") //模型问答数\n  sound            Int?     @default(0) @map(\"sound\") //模型声音\n  language         Int?     @default(1) @map(\"language\") //模型语言 1中文 2英文\n  prologue         String?  @map(\"prologue\") //模型开场白\n  isPublic         Int?     @default(1) @map(\"is_public\") //是否公开 1公开 2不公开\n  type             String?  @map(\"type\") //模型类型\n  tags             String?  @map(\"tags\") //模型标签\n  enableBackground Boolean  @default(false) @map(\"enable_background\") //是否启用背景\n  backgroundImage  String?  @map(\"background_image\") //背景图片\n  isAiImage        Boolean  @default(false) @map(\"is_ai_image\") //是否ai生成图片\n  creatorId        Int      @map(\"creator_id\") //创建者id\n  creatorName      String?  @map(\"creator_name\") //创建者id\n  createdAt        DateTime @default(now())\n  updatedAt        DateTime @updatedAt\n  delStatus        String?  @default(\"1\") @map(\"del_status\") // 删除状态  1正常 2删除\n\n  creator AppUser        @relation(fields: [creatorId], references: [userId], name: \"UserCreatedModels\")\n  users   AppUserModel[]\n\n  @@map(\"app_model\")\n}\n\nmodel AppUserModel {\n  userId  Int @map(\"user_id\")\n  modelId Int @map(\"model_id\")\n\n  isPinned    Boolean?     @default(false) @map(\"is_pinned\") // 用户个人的置顶状态\n  updatedAt   DateTime?    @updatedAt @map(\"pinned_at\") // 最后一次置顶的时间\n  appuser     AppUser      @relation(fields: [userId], references: [userId])\n  model       AppModel     @relation(fields: [modelId], references: [modelId])\n  chatRecords ChatRecord[] @relation(\"UserModelChatRecords\")\n\n  @@id([userId, modelId])\n  @@index([modelId])\n  @@map(\"app_user_model\")\n}\n\nmodel ChatRecord {\n  id               Int          @id @default(autoincrement())\n  userModelUserId  Int          @map(\"user_model_user_id\")\n  userModelModelId Int          @map(\"user_model_model_id\")\n  userModel        AppUserModel @relation(fields: [userModelUserId, userModelModelId], references: [userId, modelId], name: \"UserModelChatRecords\")\n  message          String       @db.Text()\n  role             String // 新增的字段，用于区分消息的角色\n  createdAt        DateTime     @default(now())\n  delStatus        String?      @default(\"1\") @map(\"del_status\") // 删除状态  1正常 2删除\n\n  @@map(\"chat_record\")\n}\n",
  "inlineSchemaHash": "f7c5249475c903c2ce1c5be05081dee6d58d11c6c6d50812a98df2eacaaff3e2",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/modules/system/prisma/prisma-client",
    "modules/system/prisma/prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"AppUser\":{\"dbName\":\"app_user\",\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAvatar\",\"dbName\":\"user_avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"/image/default-man.jpg\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGender\",\"dbName\":\"user_gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickName\",\"dbName\":\"nick_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"dbName\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"delStatus\",\"dbName\":\"del_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"models\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppUserModel\",\"relationName\":\"AppUserToAppUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdModels\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppModel\",\"relationName\":\"UserCreatedModels\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AppModel\":{\"dbName\":\"app_model\",\"fields\":[{\"name\":\"modelId\",\"dbName\":\"model_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelImage\",\"dbName\":\"model_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"/vegetable-bag/ai.jpg\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelName\",\"dbName\":\"model_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelDescription\",\"dbName\":\"model_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"introduce\",\"dbName\":\"introduce\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelQaCount\",\"dbName\":\"model_qa_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sound\",\"dbName\":\"sound\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"dbName\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prologue\",\"dbName\":\"prologue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"dbName\":\"is_public\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"dbName\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"dbName\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enableBackground\",\"dbName\":\"enable_background\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backgroundImage\",\"dbName\":\"background_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAiImage\",\"dbName\":\"is_ai_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"dbName\":\"creator_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorName\",\"dbName\":\"creator_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"delStatus\",\"dbName\":\"del_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppUser\",\"relationName\":\"UserCreatedModels\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppUserModel\",\"relationName\":\"AppModelToAppUserModel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AppUserModel\":{\"dbName\":\"app_user_model\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelId\",\"dbName\":\"model_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPinned\",\"dbName\":\"is_pinned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"pinned_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"appuser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppUser\",\"relationName\":\"AppUserToAppUserModel\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"model\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppModel\",\"relationName\":\"AppModelToAppUserModel\",\"relationFromFields\":[\"modelId\"],\"relationToFields\":[\"modelId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChatRecord\",\"relationName\":\"UserModelChatRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"modelId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ChatRecord\":{\"dbName\":\"chat_record\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userModelUserId\",\"dbName\":\"user_model_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userModelModelId\",\"dbName\":\"user_model_model_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userModel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppUserModel\",\"relationName\":\"UserModelChatRecords\",\"relationFromFields\":[\"userModelUserId\",\"userModelModelId\"],\"relationToFields\":[\"userId\",\"modelId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delStatus\",\"dbName\":\"del_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/modules/system/prisma/prisma-client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/modules/system/prisma/prisma-client/schema.prisma")
