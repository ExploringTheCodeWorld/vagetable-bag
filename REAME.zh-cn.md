Language : [us](./README.md) | 🇨🇳

## 菜包APP

使用 NestJS 构建的低仿 **[豆包APP](https://www.doubao.com/chat/)** 。

后期可能会推出 **HarmonyOS** 版本的前端。

### 技术栈

**后端：NestJS**

- 数据库：**MySQL**
- 数据库访问：**Prisma ORM**
- 缓存：**Redis**
- 文件服务：**MinIO**

**前端：Uniapp（Vue3）**

- RenderJS
- RequestJS
- Pinia
- Plus API

## 运行

### 依赖下载

```bash
$ npm install
```

### 运行项目

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 项目目录

### Uniapp（Vue3）

```
vegetable-bag/
├── .hbuilderx/                # HBuilderX 配置文件夹
├── api/                       # API 请求相关文件夹
├── components/                # Vue 组件文件夹
├── pages/                     # 页面文件夹
│   ├── establish/             # 创建页面
│   ├── find/                  # 查找页面
│   ├── index/                 # 首页
│   ├── mine/                  # 我的页面
│   ├── notice/                # 通知页面
│   └── login.vue              # 登录页面组件
├── scss/                      # SCSS 样式文件夹
├── static/                    # 静态资源文件夹
├── store/                     # Pinia 状态管理文件夹
├── uni_modules/               # Uni-app 模块文件夹
├── unpackage/                 # Uni-app 打包文件夹
├── utils/                     # 工具函数文件夹
├── App.vue                    # 主应用组件
├── config.js                  # 配置文件
├── index.html                 # 入口 HTML 文件
├── main.js                    # 主 JavaScript 入口文件
├── manifest.json              # 应用配置文件
├── pages.json                 # 页面配置文件
├── uni.promisify.adaptor.js   # Uni-app Promise 适配器
└── uni.scss                   # 全局 SCSS 样式文件
```

### NestJS

```
serve/
├── dist/                      # 编译后的文件夹
├── node_modules/              # 项目依赖包
├── public/                    # 公共资源文件夹
├── src/                       # 源代码文件夹
│   ├── common/                # 公共模块
│   │   ├── constants/         # 常量定义
│   │   ├── dto/               # 数据传输对象
│   │   ├── enum/              # 枚举类型
│   │   ├── filters/           # 过滤器
│   │   ├── guards/            # 守卫
│   │   ├── interceptor/       # 拦截器
│   │   ├── utils/             # 工具函数
│   │   └── result.ts          # 结果处理文件
│   ├── config/                # 配置文件夹
│   │   ├── dev.yml            # 开发环境配置文件
│   │   └── index.ts           # 配置入口文件
│   ├── interface/             # 接口定义文件夹
│   ├── modules/               # 模块文件夹
│   │   ├── mobile/            # 移动端模块
│   │   │   ├── auth/          # 认证模块
│   │   │   ├── chat/          # 聊天模块
│   │   │   ├── generate/      # 生成模块
│   │   │   ├── model/         # 数据模型
│   │   │   ├── user/          # 用户模块
│   │   │   └── mobile.module.ts  # 移动端模块入口文件
│   │   ├── system/            # 系统模块
│   │   │   ├── minio/         # MinIO 文件存储模块
│   │   │   ├── prisma/        # Prisma ORM 模块
│   │   │   ├── redis/         # Redis 缓存模块
│   │   │   └── system.module.ts  # 系统模块入口文件
│   │   ├── tasks/             # 任务模块
│   │   └── upload/            # 上传模块
│   ├── prisma/                # Prisma ORM 相关文件
│   ├── app.module.ts          # 主应用模块
│   └── main.ts                # 应用入口文件
├── test/                      # 测试文件夹
├── .env                       # 环境变量配置文件
├── .eslintrc.js               # ESLint 配置文件
├── .gitignore                 # Git 忽略文件
├── .prettierrc                # Prettier 配置文件
├── nest-cli.json              # NestJS CLI 配置文件
├── package-lock.json          # 锁定依赖版本文件
├── package.json               # 项目配置文件
├── README.md                  # 项目说明文件
├── tsconfig.build.json        # TypeScript 构建配置文件
└── tsconfig.json              # TypeScript 配置文件
```

## 群

![群聊](./image.png)