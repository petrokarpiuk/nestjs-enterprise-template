# 🚀 NestJS Enterprise Template

A minimal yet production-ready template for building applications with NestJS, Keycloak authentication, and TypeORM.

This template provides a solid foundation with essential enterprise features pre-configured, allowing you to focus on building your application rather than setting up infrastructure.

---

## ✨ Features

- 🎯 **Easy setup** - Ready to start developing in minutes
- 🔐 **Authentication & Authorization** - Keycloak integration with OIDC
- 📊 **TypeORM** - Database ORM with PostgreSQL
- 🔄 **API Versioning** - Built-in versioning support
- 📚 **Swagger Documentation** - Auto-generated API docs
- ✅ **Health Checks** - Database health monitoring
- 🌐 **CORS Enabled** - Cross-origin resource sharing configured
- ⚙️ **Configuration Management** - Environment-based configuration
- 🛡️ **Zod Validation** - Type-safe request validation
- 📝 **Sample CRUD** - Working example with pagination
- 🐳 **Docker Compose** - Complete infrastructure setup
- 🚄 **SWC Compiler** - Fast build times with Speedy Web Compiler
- 🔧 **Deployment config** - Caddy and PM2 configuration examples

---

## 🏃 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start infrastructure
```bash
npm run infra:start
```

Or manually:
```bash
docker compose -f infra/dockerfiles/docker-compose.yml up --wait
```

### 3. Start the application
```bash
npm run start:dev
```

---

## 🔐 Configure Keycloak Secret

1. Go to [Keycloak Admin Console](http://localhost:8080/admin/master/console/)
2. Login with credentials: `solid` / `solid`
3. Select the realm
4. Select the **solid-api** client
5. Click on the **Credentials** tab
6. Click **Generate Secret**
7. Copy the secret and paste it in your `.env` file as `KEYCLOAK_SECRET`

---

## 🔗 Default URLs

| Service | URL | Credentials |
|---------|-----|-------------|
| **API Server** | http://localhost:4000 | - |
| **Health Checks** | http://localhost:4000/v1/health | - |
| **Keycloak Admin** | http://localhost:8080/admin/master/console/ | solid / solid |

---

## 📋 Versions

| Technology | Version |
|------------|---------|
| **NestJS** | 11.1.10 |
| **PostgreSQL** | 18 |
| **Keycloak** | 26.4 |

---

## 📄 License

MIT

---

**Ready to build something great? Clone this template and start shipping!** 🎉
