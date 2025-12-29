import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default () => ({
  env: env('ENV', 'development'),
  port: parseInt(env('PORT', 4000), 10),
  cors: {
    origin: '*',
  },
  postgres: {
    type: 'postgres',
    host: env('DB_HOST', 'localhost'),
    port: env('DB_PORT', '5432'),
    username: env('DB_USERNAME', 'solid'),
    password: env('DB_PASSWORD', 'solid'),
    database: env('DB_DATABASE', 'solid-saas'),
    autoLoadEntities: true,
    synchronize: true,
    ...(env('ENV') === 'production'
      ? { ssl: { rejectUnauthorized: false } }
      : {}),
  } as PostgresConnectionOptions,
  keycloak: {
    authServerUrl: env('KEYCLOAK_URL', 'http://localhost:8080'),
    realm: env('KEYCLOAK_REALM', 'solid'),
    clientId: env('KEYCLOAK_CLIENT', 'solid-api'),
    secret: env('KEYCLOAK_SECRET', 'dxjrQEZmE1hkQTLsAk7NMS3LecduFDqk'),
  },
});

function env(variable, defaultValue?) {
  return process.env[variable] || defaultValue;
}
