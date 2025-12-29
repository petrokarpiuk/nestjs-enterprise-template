import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import configuration from './configuration';
import { AuthGuard, KeycloakConnectModule } from 'nest-keycloak-connect';
import { KeycloakConfigService } from './auth/services/keycloak-config/keycloak-config.service';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ContactsModule } from './contacts/contacts.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './database/database-config.service';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({
  imports: [
    /** Core modules */
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    KeycloakConnectModule.registerAsync({
      imports: [AuthModule],
      useExisting: KeycloakConfigService,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, DatabaseModule],
      useExisting: DatabaseConfigService,
    }),
    /** Features */
    AuthModule,
    HealthModule,
    ContactsModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
