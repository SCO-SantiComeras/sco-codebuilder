import { registerAs } from "@nestjs/config";

export const configurationApp = registerAs('app', () => ({
  env: process.env.ENV_APP,
  port: parseInt(process.env.PORT_APP, 10 || 3000),
  host: process.env.HOST_APP,
  frontendPort: parseInt(process.env.FRONTEND_PORT_APP, 10 || 4200),
  frontendHost: process.env.FRONTEND_HOST_APP,
  production: process.env.PRODUCTION_APP == 'true',
  xamppPath: process.env.XAMPP_PATH_APP,
}));
