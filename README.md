<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


```bash
$ docker-compose up -d

```

## Creating a TypeOrm Migration -  Setting up Migrations

```bash
npx typeorm migration:create -n CoffeeRefactor

```

## RUNNING MIGRATIONS 

```bash
You must BUILD your Nest project (so that everything is output to the `/dist/` folder,
before a Migration can run, it needs compilated files.

Compile project first 
$ npm run build

Run migration(s) 
$ npx typeorm migration:run

REVERT migration(s)
$ npx typeorm migration:revert

Let TypeOrm generate migrations (for you)
$ npx typeorm migration:generate -n SchemaSync
```

#### Nest CLI - Generate a new CoffeeRatingModule

```bash
nest g mo coffee-rating
```

#### Nest CLI - Generate a new CoffeeRatingService 

```bash
nest g s coffee-rating
```

#### Generate Filter with Nest CLI 

```bash
nest g filter common/filters/http-exception
```

#### Generate ApiKeyGuard with Nest CLI

```bash
nest g guard common/guards/api-key
```

#### Generate WrapResponseInterceptor with Nest CLI 

```bash
nest g interceptor common/interceptors/wrap-response
```


#### Generate TimeoutInterceptor with Nest CLI 

```bash
nest g interceptor common/interceptors/timeout
```


#### Generate ParseIntPipe with Nest CLI

```bash
nest g pipe common/pipes/parse-int
```

#### Generate LoggingMiddleware with Nest CLI

```bash
nest g middleware common/middleware/logging
```

####  Installing @nestjs/swagger

```bash
/**
 * Installing @nestjs/swagger
 * & Swagger UI for Express.js (which our application uses)
 * 💡 Note: If your application is using Fastiy, install `fastify-swagger` instead
 */
npm install --save @nestjs/swagger swagger-ui-express
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

### About Me

 * [My website](http://santoshshinde.com/) (santoshshinde.com)
 * [Github](https://github.com/santoshshinde2012) (@santoshshinde2012)
 * [Twitter](https://twitter.com/shindesan2012) (@shindesan2012)
 * [Stackoverflow](https://stackoverflow.com/users/4319438/santosh-shinde)  (@user:4319438)
 * [Medium](https://medium.com/@shindesan2012) (@shindesan2012)