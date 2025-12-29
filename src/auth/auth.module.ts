import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './services/keycloak-config/keycloak-config.service';

@Module({
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class AuthModule {}
