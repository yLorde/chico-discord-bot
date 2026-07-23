COMPOSE ?= docker compose

.PHONE: help install-discord-bot run-discord-bot run-express-api build up up-detached up-db up-detached down stop restart logs restart-db restart-discord-bot logs-db logs-discord-bot clean-volumes

help:
	@echo "RPG Discord Bot - Makefile"
	@echo "  make install-discord-bot		Install npm dependencies for Discord bot"
	@echo "  make run-discord-bot        	Run Discord bot"
	@echo "  make build                  	Build API image"
	@echo "  make up                     	Start stack in foreground"
	@echo "  make up-detached            	Start stack in background"
	@echo "  make up-db                  	Start database container"
	@echo "  make up-db-detached         	Start database container in background"
	@echo "  make down                   	Stop stack"
	@echo "  make stop                   	Stop containers"
	@echo "  make restart                	Restart containers"
	@echo "  make logs                   	Show container logs"
	@echo "  make restart-db             	Restart database container"
	@echo "  make restart-discord-bot    	Restart discord bot container"
	@echo "  make logs-db                	Show database container logs"
	@echo "  make logs-discord-bot			Show discord bot container logs"
	@echo "  make clean-volumes 		 	Remove all volumes"

install-discord-bot:
	cd ./app && npm install

run-discord-bot:
	node --env-file=.env ./app/src/index.js

build:
	$(COMPOSE) build discord-bot

up:
	$(COMPOSE) up --build

up-detached:
	$(COMPOSE) up -d --build

up-db:
	$(COMPOSE) up -d --build postgres

up-db-detached:
	$(COMPOSE) up -d postgres

down:
	$(COMPOSE) down

stop:
	$(COMPOSE) stop

restart:
	$(COMPOSE) restart discord-bot

logs:
	$(COMPOSE) logs -f

restart-db:
	$(COMPOSE) restart postgres

restart-discord-bot:
	$(COMPOSE) restart discord-bot

logs-db:
	$(COMPOSE) logs -f postgres

logs-discord-bot:
	$(COMPOSE) logs -f discord-bot

clean-volumes:
	$(COMPOSE) down -v