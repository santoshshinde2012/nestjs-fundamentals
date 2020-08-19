import { Module, DynamicModule } from '@nestjs/common';
import { createConnection, ConnectionOptions } from 'typeorm';

@Module({
    providers: [
        {
            provide: 'CONNECTION',
            useValue: createConnection({
              type: 'postgres',
              host: 'localhost',
              port: 5432
            }),
        }
    ]
})
export class DatabaseModule {
    static register(options: ConnectionOptions): DynamicModule {
        return {
          module: DatabaseModule,
          providers: [
            {
              provide: 'CONNECTION', // 👈
              useValue: createConnection(options), 
            }
          ]
        }
    }
}



// Utilizing the dynamic DatabaseModule in another Modules imports: []
imports: [
    DatabaseModule.register({ // 👈 passing in dynamic values
      type: 'postgres',
      host: 'localhost',
      password: 'password',
    })
]