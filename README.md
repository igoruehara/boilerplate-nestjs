## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Features Boilerplate Nestjs

- [x] CRUD User
- [x] CRUD Organization
- [x] Login With JWT
- [x] MongoDB
- [x] Serverless AWS Lambda container docker
- [x] Docker
- [x] Swagger (Local/Serverless)
- [x] Request API external example with @nestjs/axios
- [x] Pipeline deploy to AWS Lambda from Github Actions
- [x] Pipeline deploy to AWS Lambda from Gitlab
- [x] Roles Guard (user and admin)

## Installation

```bash
$ npm install
```

## Running the app

````bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# Deploy to Serverless AWS Lambda, pipeline from Github Actions, config path .github
$ npm run deploy

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
````

## Use JWT extends in other project

```bash
# if necessary use JWT extends in other project
#if you need to use signed JWT authentication created in this project, just copy the auth folder with the following files:

#src/auth
- jwt-auth.guard.ts
- jwt.modules.ts
- jwt.strategy.ts

#In the module of the entity that you are going to use, put it in
imports[ PassportModule]
-> import { PassportModule } from '@nestjs/passport';

#and in app.module.ts add
imports: [JwtModule]
-> import { JwtModule } from './auth/jwt.module';
```
