# 🤖 Discord Bot with PostgreSQL

Um bot para Discord desenvolvido com Node.js e PostgreSQL, focado em organização, persistência de dados e escalabilidade.

## ✨ Features

- ✅ Sistema de comandos
- ✅ Integração com PostgreSQL
- ✅ Persistência de dados
- ✅ Estrutura organizada
- ✅ Variáveis de ambiente com `.env`
- ✅ Fácil expansão para novos comandos
- ✅ Arquitetura modular

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Discord.js
- PostgreSQL
- TypeScript / JavaScript
- dotenv

---

## 📂 Estrutura do projeto

```bash
src/
├── commands/
├── events/
├── database/
├── discord/
└── index.js
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/yLorde/discord-bot-with-postgres.git
```

### 2. Entre na pasta do projeto

```bash
cd discord-bot-with-postgres
```

### 3. Instale as dependências

```bash
make install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env`:

Você pode usar o `.env.example` para se localizar.

---

## ▶️ Executando o bot

Modo desenvolvimento:

```bash
make install
make up-db-detached
make run
```

Modo produção:

```bash
make install
make build
make up-detached
```

---

## 📌 Convite do Bot

Você pode gerar o link de convite através do Discord Developer Portal:

- https://discord.com/developers/applications


---

## 🔒 Variáveis de ambiente

| Variável | Descrição |
|---|---|
| DISCORD_TOKEN         | Token do bot                      |
| DISCORD_CLIENT_ID     | ID do client                      |
| DISCORD_GUILD_ID      | ID do servidor                    |
| USE_GLOBAL_COMMANDS   | Comandos limitados por servidor   |
| POSTGRES_URL          | URL de conexão postgres           |
| POSTGRES_USER         | Nome do usuário postgres          |
| POSTGRES_PASSWORD     | Senha do usuário postgres         |
| POSTGRES_DB           | Nome da database postgres         |

---

## 📈 Melhorias futuras

- [ ] Sistema de slash commands
- [x] Docker
- [ ] Logs avançados
- [ ] Sistema de permissões
- [ ] Dashboard web
- [ ] Cache com Redis

---

## 📄 Licença

Este projeto está sob a licença GNU General Public License v3.0.