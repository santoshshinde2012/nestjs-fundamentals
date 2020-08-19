## Scope DEFAULT - This is assumed when NO Scope is entered like so: @Injectable() */

```bash
@Injectable({ scope: Scope.DEFAULT })
export class CoffeesService {}
```

## Scope TRANSIENT 

```bash
 /* 
 * Transient providers are NOT shared across consumers. 
 * Each consumer that injects a transient provider 
 * will receive a new, dedicated instance of that provider. 
 */
@Injectable({ scope: Scope.TRANSIENT })
export class CoffeesService {}

// Scope TRANSIENT with a Custom Provider
{
  provide: 'COFFEE_BRANDS',
  useFactory: () => ['buddy brew', 'nescafe'],
  scope: Scope.TRANSIENT // 👈
}
```

## Scope REQUEST 

```bash
/**
 * Scope REQUEST 

 * Request scope provides a new instance of the provider 
 * exclusively for each incoming request. 
 */
@Injectable({ scope: Scope.REQUEST })
export class CoffeesService {}
```

## ConfigModule
```bash
  /** 
  * Have ConfigModule *ignore* .env files 
  * Useful when using Provider UIs such as Heroku, etc (and they handle all ENV variables)
  */
  ConfigModule.forRoot({
    ignoreEnvFile: true,
  });
```