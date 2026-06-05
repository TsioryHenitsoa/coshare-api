# 📦 Backend Kit — Modular NestJS Architecture

## 🚀 Overview

This project is a modular NestJS backend kit designed as a reusable and scalable architecture base.

It is not a simple application — it is a **backend foundation** that can be reused across multiple projects, structured like an internal framework.

The goal is to build a clean, maintainable, and production-ready backend architecture using modular design principles.

---

## 🧠 Architecture Philosophy

This project follows a combination of:

- 🧩 **Modular Monolith Architecture**
- 🏗️ **Clean Architecture** principles
- 🔌 **Kit-based** reusable modules design

> **Key idea:** Each module must be independent, reusable, and easily extractable into other projects.

---

## 🏗️ Project Structure

```
src/
  core/         # Core system (framework-like logic)
  modules/      # Business & feature modules
  shared/       # Global utilities (decorators, pipes, utils)
  config/       # App configuration
  database/     # Database setup & abstraction layer
```

---

## ⚙️ Core Concepts

### 🔷 Core Layer

Contains reusable backend logic:

- authentication system *(future)*
- base services
- global error handling
- logging system *(future)*

### 🟩 Modules Layer

Feature-based modules:

- `users`
- `auth`
- `notifications`
- `payments` *(future)*

Each module is:

- self-contained
- independent
- reusable

### 🟨 Shared Layer

Global utilities:

- decorators
- pipes
- helpers
- constants

---

## 🧪 Design Rules

- ✔ Modules must be independent
- ✔ Core must not depend on modules
- ✔ Shared must contain no business logic
- ✔ Every module must be extractable
- ✔ Dependency Injection is used everywhere

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

or

```bash
npm install
```

### 2. Run the project

```bash
npm run start:dev
```

### 3. Build

```bash
npm run build
```

---

## 🐳 Docker (Optional)

Docker is not required to run the project locally, but it is recommended for future production setups.

**Planned support:**

- PostgreSQL container
- Redis container
- API containerization

**Future usage:**

```bash
docker-compose up -d
```

---

## 🎯 Project Goal

This project aims to become:

- a personal backend starter kit
- a reusable NestJS architecture base
- a portfolio-grade backend system
- a foundation for multiple SaaS or freelance projects

---

## 🧱 Roadmap

- [x] Core architecture setup
- [ ] Auth module (JWT + refresh tokens)
- [ ] Users module
- [ ] Database integration (PostgreSQL + Prisma/TypeORM)
- [ ] Logging system
- [ ] Docker full setup
- [ ] Event-driven communication system

---

## 💡 Why this project?

Instead of rebuilding backend structure for every project, this kit allows:

- 👉 faster development
- 👉 consistent architecture
- 👉 production-ready structure by default
- 👉 better scalability for freelance projects

---

## 👨‍💻 Author

Built as a personal backend engineering kit for:

- reusable NestJS architecture
- freelance projects
- scalable backend systems

---

## 🔥 Final note

> This is not just a project.
>
> It is a **backend foundation system** designed to evolve into a personal framework.

Thank you
