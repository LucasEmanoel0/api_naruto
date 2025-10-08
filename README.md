# API Naruto

## Apresentação curta — API Naruto

A API Naruto é um backend em Node.js + TypeScript pensado para gerenciar dados de um universo fictício (ex.: vilas, times, ninjas e missões). O projeto usa Express para expor endpoints HTTP e Drizzle ORM com PostgreSQL para acesso ao banco de dados, e já traz configuração para execução via Docker Compose.

### Principais pontos

- Propósito: prover uma API REST simples para armazenar e consultar entidades como ninjas, equipes e missões.
- Tecnologia: Node.js (TypeScript), Express, Drizzle ORM, PostgreSQL.
- Porta padrão: 3333 (configurada no `src/server.ts` e no `docker-compose.yml`).
- Banco: PostgreSQL (credenciais e DB definidos no `docker-compose.yml`; use `DATABASE_URL` no `.env`).

### Características

- Estrutura mínima pronta para desenvolvimento rápido.
- Migrations/snapshots disponíveis na pasta `drizzle/`.
- Suporte recomendado para desenvolvimento com Docker Compose (serviço `postgres` incluso).

### Como testar rapidamente

1. Subir com Docker:
	- `docker-compose up --build`
2. Verificar se o servidor está respondendo em:
	- `http://localhost:3333`

(Se preferir rodar localmente, defina `DATABASE_URL` no `.env` e use `npx tsx src/server.ts` ou ajuste o script `dev`.)

## Visão geral

Este repositório contém uma API Node.js (TypeScript) simples que usa Express e Drizzle ORM para PostgreSQL. O projeto já inclui um Dockerfile e um `docker-compose.yml` com um serviço PostgreSQL pronto para uso.

## Pré-requisitos

- Node.js 18+ e npm
- Docker & Docker Compose (opcional, recomendado para rodar o banco localmente)
- (Opcional) `psql` para executar SQL localmente

## Estrutura relevante

- `src/server.ts` — ponto de entrada do servidor
- `drizzle/` — migrations e snapshots gerados
- `drizzle/src/db/*.ts` — schemas Drizzle
- `drizzle.config.ts` — configuração do Drizzle Kit
- `docker-compose.yml` — define serviços `api` e `postgres`

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com as variáveis abaixo (exemplo):

```
# .env
DATABASE_URL=postgres://itachi007:itachi007@localhost:5432/api_naruto
POSTGRES_USER=itachi007
POSTGRES_PASSWORD=itachi007
POSTGRES_DB=api_naruto
```

> Obs: os valores acima refletem o que está em `docker-compose.yml`. Altere conforme sua preferência.

## Instalação

1. Instale dependências:

```powershell
npm install
```

2. (Opcional) Crie o `.env` conforme o exemplo acima.

## Executar com Docker (recomendado para testes rápidos)

O `docker-compose.yml` já monta um serviço PostgreSQL. Para subir a API e o banco:

```powershell
docker-compose up --build
```

- A API ficará exposta em http://localhost:3333
- O Postgres estará em localhost:5432 com as credenciais de `docker-compose.yml`.

Para rodar apenas o Postgres via Docker Compose:

```powershell
docker-compose up -d postgres
```

## Executar localmente (sem Docker)

1. Garanta que um PostgreSQL esteja rodando e que `DATABASE_URL` aponte para ele.
2. Instale dependências (já mostrado acima).

A forma recomendada de rodar o servidor durante desenvolvimento é usando `tsx` (está nas devDependencies). Use:

```powershell
npx tsx src/server.ts
```

OBS: O script `dev` no `package.json` usa `node --watch ./src/server.ts`. Dependendo da sua versão do Node, executar um arquivo `.ts` diretamente com `node` pode não funcionar. Se tiver problemas, use o comando `npx tsx src/server.ts` ou atualize o script `dev` para `tsx src/server.ts`.

## Banco de dados e migrações (Drizzle)

A configuração do Drizzle Kit está em `drizzle.config.ts` e aponta para os schemas em `drizzle/src/db/*.ts`.

Existem duas opções para aplicar as alterações do schema ao banco:

1. Usar os arquivos SQL já presentes em `drizzle/` (migrations). Você pode aplicar manualmente usando `psql` ou um cliente SQL:

```powershell
# Exemplo usando psql (ajuste DATABASE_URL):
psql $env:DATABASE_URL -f .\drizzle\0000_goofy_human_cannonball.sql
psql $env:DATABASE_URL -f .\drizzle\0001_fearless_miss_america.sql
psql $env:DATABASE_URL -f .\drizzle\0002_eminent_reptil.sql
```

2. Usar `drizzle-kit` (CLI). O projeto tem `drizzle-kit` como devDependency. Consulte a documentação oficial do Drizzle Kit para os comandos exatos (por exemplo gerar e aplicar migrações). Exemplo genérico:

```powershell
npx drizzle-kit --help
# ou, para gerar/aplicar migrações (ver docs do drizzle-kit):
# npx drizzle-kit <comando> --config ./drizzle.config.ts
```

> Nota: o comando exato do `drizzle-kit` pode variar por versão. Se preferir aplicar as SQLs diretamente, a primeira opção é a forma mais direta.

## Scripts úteis

- `npm run dev` — script configurado atualmente para `node --trace-warnings --watch ./src/server.ts` (pode precisar de `tsx` conforme mencionado)

## Dicas e solução de problemas

- Erro ao executar `src/server.ts` com `node`: use `npx tsx src/server.ts`.
- Se o servidor não conectar ao banco quando iniciado via Docker Compose, verifique se a variável `DATABASE_URL` está disponível para o processo (no Dockerfile atual o container executa `npm run dev` após `npm install`).
- Para inspecionar o banco localmente, conecte-se a `localhost:5432` com usuário/senha do `docker-compose.yml`.

## Como contribuir

1. Abra uma issue descrevendo o bug ou feature.
2. Faça um fork, crie uma branch e abra um Pull Request com mudanças pequenas e testáveis.

## Contato

Para dúvidas, abra uma issue no repositório: https://github.com/LucasEmanoel0/api_naruto/issues

---

Arquivo gerado automaticamente: README básico com instruções para rodar o projeto em Docker ou localmente.
