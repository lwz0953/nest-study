import { DynamicModule, ModuleMetadata, Provider, Type } from '@nestjs/common';
import {
  getDataSourceToken,
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { CUSTOM_REPOSITORY_METADATA } from '../content/constants';
import { DataSource, ObjectType } from 'typeorm';

export class CoreModule {
  public static forRoot(options: {
    database: TypeOrmModuleOptions;
  }): DynamicModule {
    const imports: ModuleMetadata['imports'] = [
      TypeOrmModule.forRoot(options.database),
    ];
    const providers: ModuleMetadata['providers'] = [];
    return {
      global: true,
      imports,
      providers,
      module: CoreModule,
    };
  }

  public static forRepository<T extends Type<any>>(
    repositories: T[],
    dataSourceName?: string,
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const Repo of repositories) {
      const entity = Reflect.getMetadata(CUSTOM_REPOSITORY_METADATA, Repo);

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceToken(dataSourceName)],
        provide: Repo,
        useFactory: (dataSource: DataSource): typeof Repo => {
          const base = dataSource.getRepository<ObjectType<any>>(entity);
          return new Repo(base.target, base.manager, base.queryRunner);
        },
      });
    }

    return {
      exports: providers,
      module: CoreModule,
      providers,
    };
  }
}
