import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key.guard';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
    imports: [ ConfigModule ],
    providers: [ 
        { provide: APP_GUARD, useClass: ApiKeyGuard }
    ],
})
export class CommonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // Apply LoggingMiddleware in our AppModule 
        consumer
        .apply(LoggingMiddleware)
        .forRoutes("*");
    }
}
