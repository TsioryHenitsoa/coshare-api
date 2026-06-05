# Backend Kit

A modular, scalable NestJS architecture designed as a reusable backend foundation.

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Overview

Backend Kit is not a simple application — it is a **backend foundation** built to be reused across multiple projects, structured like an internal framework.

The goal is to provide a clean, maintainable, and production-ready architecture using modular design principles, so that starting a new backend project never means starting from scratch.

---

## Architecture

This project follows a combination of:

- **Modular Monolith Architecture** — features are isolated into independent modules
- **Clean Architecture principles** — clear separation of concerns across layers
- **Kit-based design** — every module is built to be extractable and reusable

> Each module must be independent, self-contained, and easily portable to other projects.

---

## Project Structure

```
src/
├── core/         # Framework-like logic (auth, logging, error handling)
├── modules/      # Feature modules (users, auth, notifications...)
├── shared/       # Global utilities (decorators, pipes, helpers, constants)
├── config/       # Application configuration
└── database/     # Database setup and abstraction layer
```

---

## Core Concepts

### Core Layer

Contains reusable, cross-cutting backend logic:

- Base services and abstractions
- Global exception handling
- Authentication system *(planned)*
- Logging system *(planned)*

### Modules Layer

Business feature modules, each independently structured:

| Module          | Status    |
|-----------------|-----------|
| `users`         | Planned   |
| `auth`          | Planned   |
| `notifications` | Planned   |
| `payments`      | Future    |

### Shared Layer

Stateless, business-logic-free utilities shared across modules:

- Custom decorators
- Validation pipes
- Helper functions
- Global constants

---

## Design Rules

| Rule | Description |
|------|-------------|
| Module independence | Modules must not directly depend on each other |
| Core isolation | Core must not import from feature modules |
| Shared purity | Shared must contain no business logic |
| Portability | Every module must be extractable into another project |
| DI everywhere | Dependency Injection is used throughout the codebase |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or pnpm

### Installation

```bash
npm install
```

### Running in development

```bash
npm run start:dev
```

### Build for production

```bash
npm run build
npm run start:prod
```

---

## Docker

Docker is not required for local development but is recommended for production environments.

Planned Docker support:

- PostgreSQL container
- Redis container
- API containerization via multi-stage Dockerfile

```bash
# Future usage
docker-compose up -d
```

---

## Roadmap

- [x] Core architecture setup
- [ ] Auth module — JWT + refresh token strategy
- [ ] Users module
- [ ] Database integration — PostgreSQL with Prisma or TypeORM
- [ ] Structured logging system
- [ ] Full Docker setup
- [ ] Event-driven communication layer

---

## Motivation

Instead of rebuilding backend structure for every new project, Backend Kit provides:

- A consistent, opinionated architecture out of the box
- Faster project bootstrapping
- Production-ready patterns by default
- A scalable foundation for SaaS and freelance projects

---

## License

[MIT](LICENSE)

