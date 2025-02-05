<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🚀 API Experimental com NestJS

Este é um projeto **experimental e de aprendizado** usando o NestJS para construir APIs REST. A ideia principal foi explorar conceitos do framework e aprender na prática como estruturar um backend moderno com Nest.

## 📚 Sobre o Projeto

- **Objetivo**: Aprender e praticar o desenvolvimento de APIs com NestJS.
- **Principais conceitos estudados**:
  - Controllers, Services e Modules no NestJS.
  - Uso de Interceptors para padronizar respostas.
  - Tratamento de erros com Exceções HTTP.
  - Deploy no Render (plano gratuito).
- **Importante**: Este projeto **não** é uma aplicação finalizada ou com fins práticos. Foi criado com propósitos puramente educativos.
- **ChatGPT**: Grande parte do aprendizado e das soluções aplicadas foram discutidas e explicadas com o ChatGPT, ajudando na compreensão do NestJS e boas práticas de desenvolvimento.

## 🔥 Tecnologias Utilizadas

- **NestJS** (framework principal)
- **Node.js** (ambiente de execução)
- **TypeScript** (linguagem utilizada)
- **Render** (hospedagem da API)

## 🌍 Deploy Online

A API está rodando no Render! 🎉

🔗 **URL da API no Render**: [https://nest-api-xtjm.onrender.com/](https://nest-api-xtjm.onrender.com/)

## 🛠 Como Rodar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/s0lturn3/nest-api.git
   cd nest-api
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run start:dev
   ```
4. Acesse a API localmente em `http://localhost:3000`

## 🏗 Estrutura do Projeto

```
📂 src/
├── 📂 modules/      # Arquivos dos controllers
├    ├── convert/
├    ├── horoscope/
├    ├── jokes/
├    └── random/
├── 📂 interceptors/     # Interceptor para padronizar respostas
├── app.module.ts       # Módulo principal do NestJS
└── main.ts             # Arquivo principal (bootstrap)
```

## 📌 Exemplo de Endpoints

### ✅ Sucesso (200 OK)
```json
{
  "error": false,
  "errorMessage": null,
  "code": 200,
  "response": { "km": "10", "miles": "6.21" }
}
```

### ❌ Erro 400 (Bad Request)
```json
{
  "error": true,
  "errorMessage": "O parâmetro 'km' é obrigatório.",
  "code": 400,
  "response": null
}
```

## 🚀 Melhorias Futuras

- Adicionar testes automatizados
- Explorar bancos de dados com TypeORM ou Prisma
- Implementar autenticação (JWT, OAuth)
- Criar uma documentação com Swagger

---

📌 **Aviso:** Este projeto é totalmente experimental e pode conter bugs ou falhas. Se quiser dar feedback ou sugerir melhorias, fique à vontade! 😃
