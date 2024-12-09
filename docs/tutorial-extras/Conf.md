---
sidebar_position: 2
---

# Configuração
## Como Configurar o Ambiente
Siga os passos abaixo para garantir que você tenha todas as dependências instaladas e o ambiente configurado corretamente.

### 1. Pré-requisitos
Antes de iniciar a configuração, certifique-se de ter as seguintes ferramentas instaladas no seu sistema:
- **Git** - Para clonar o repositório e gerenciar o controle de versão.
Docker (opcional, se o projeto utiliza containers) - Para facilitar a criação de ambientes isolados e consistentes.
- **Python 3.12** - Certifique-se de ter a versão correta instalada para evitar problemas de compatibilidade.
- **Node.js e npm (se o projeto inclui um frontend em React, Angular, etc.)** - Necessários para instalar as dependências de frontend e executar a aplicação.

### 2. Clonar o Repositório
Clone o repositório do projeto do GitHub para sua máquina local.

### 3. Configurar Variáveis de Ambiente
Certifique-se de configurar as variáveis de ambiente necessárias para o projeto. Normalmente, o arquivo .env.example no repositório contém as variáveis necessárias. Crie uma cópia desse arquivo e ajuste as variáveis conforme necessário:
```bash
cp .env.example .env
```
Edite o arquivo ```.env``` com as configurações específicas, como a URL do banco de dados, chaves de API, entre outras configurações.

### 4. Instalar Dependências
**Para o Backend:** Instale as dependências do backend usando o gerenciador de pacotes (por exemplo, pip para Python):
```bash
pip install -r requirements.txt
```
**Para o Frontend:** Navegue até a pasta de frontend e instale as dependências com o npm ou yarn:
```bash
cd frontend
npm install
```

### 5. Configurar o Banco de Dados
Realize as migrações para configurar o banco de dados inicial. Certifique-se de que o banco de dados está em execução e configurado corretamente no arquivo .env.
```bash
# Exemplo para um projeto Django:
python manage.py migrate
```

### 6. Executar o Projeto
Inicie o servidor de desenvolvimento para verificar se tudo está configurado corretamente.
**Backend:**
```bash
# Exemplo para um projeto Django:
python manage.py runserver
```
**Frontend:**
```bash
npm run dev
```
Acesse o projeto no navegador no endereço indicado, por exemplo:

- ```http://localhost:8000``` (para o backend)
- ```http://localhost:3001``` (para o metabse)
- ```http://localhost:3000``` (para o frontend do sistema) 
- ```http://localhost:4200``` (para o frontend do totem)
- ```http://localhost:4202``` (para o frontend do visor)  

### 7. Testes
Antes de começar a contribuir, é recomendável executar os testes existentes para garantir que o ambiente está configurado corretamente.
```bash
# Exemplo para um projeto Django:
python manage.py test
```


