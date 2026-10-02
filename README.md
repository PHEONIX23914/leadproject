# leadproject

Phase 0 monorepo for a local-first B2B lead acquisition product.

This milestone (M0.1) is tooling only: pnpm workspaces, Turborepo, TypeScript, ESLint, Prettier, Vitest, and Docker PostgreSQL 16. Application logic is not implemented yet.

## Requirements

- Node.js 22 or newer (`.nvmrc` is set to `22`)
- pnpm 10 (pinned via `packageManager` in the root `package.json`)
- Docker (optional, for PostgreSQL)

## Install

```bash
pnpm install
```

## Common commands

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm format
```

## PostgreSQL 16 (local)

```bash
pnpm db:up
```

Compose file: `infra/docker/docker-compose.yml`. Copy `.env.example` to `.env` if you want to override defaults.

Stop with:

```bash
pnpm db:down
```
