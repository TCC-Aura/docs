---
sidebar_position: 4
---

# Segurança e DevOps

## Stack Tecnológica

### Docker
Usado para containerizar a aplicação, tanto no backend (Django) quanto no frontend (React), permitindo que a aplicação seja executada em qualquer ambiente de forma consistente.

### Docker Compose
Utilizado para orquestrar múltiplos containers, facilitando o desenvolvimento local e o deploy de serviços interdependentes como o banco de dados, frontend, backend, e serviços auxiliares (ex.: Redis para cache).

### Git Flow
GitFlow foi adotado como a estratégia de ramificação para o gerenciamento do código-fonte. Essa abordagem auxiliou na organização do desenvolvimento de forma eficiente, garantindo um fluxo de trabalho claro e colaborativo entre as equipes. 

### Azure
Utilizado para autenticação via Single Sign-On (SSO) com Active Directory, garantindo um login seguro e integrado para os funcionários do ambulatório.

## Segurança

### Autenticação e Autorização
A autenticação SSO (Single Sign-On) do Azure oferece benefícios significativos em termos de segurança, principalmente pela centralização do controle de identidade. Com o SSO, os usuários podem acessar múltiplos sistemas internos e serviços com um único conjunto de credenciais, reduzindo o risco de senhas fracas ou reutilizadas, e simplificando a gestão de autenticação.

Além disso, o gerenciamento do EDV login é feito através de sessões e uma blacklist para os tokens expirados, oferecendo segurança através do controle contínuo da sessão do usuário, bloqueando acessos suspeitos ou tokens expirados por meio de uma lista negra (blacklist), ajudando a prevenir abusos em caso de compromissos de segurança.

O uso combinado de ambas as abordagens oferece uma proteção robusta, balanceando conveniência com rigor de segurança.


