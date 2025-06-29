<h1 align="center">SHINY HAUNTER</h1>

## Layout

<p align="center">
  <img src="https://github.com/user-attachments/assets/aafabe52-ddfb-4f57-96c4-4f20ddb9f3dc" alt="logo" width="100%"/>
</p>

## Descrição

Esse projeto foi desenvolvido para ser uma ferramenta que auxilia os jogadores da franquia Pokémon a gerenciarem seus inventários de espécies shinies e organizarem os que estão em sua lista de desejos. Para a construção do sistema, adotei a linguagem **Typescript** com uso da biblioteca **ReactJS**, por conta do alto volume de dados recebido via API Rest, implementei uma arquitetura de estados com uso de **Redux**, garantindo a persistência e consistência  das informações.

## Highlights técnicos
- Arquitetura modular, evitando o uso de acoplamento indevido;
- Uso de Vite como bundler, o que possibilita hot reload em tempo de desenvolvimento e build otimizado;
- Alto volume de dados via API Rest refinados por um método serializer, o que mantém a performance em cenários com alta demanda de informações;
- Com Redux Toolkit e React Query, implementei boas práticas de gerenciamento de estado global, além de gerenciamento de cache e dados assíncronos, com foco em performance e UX;
- Requisições HTTP com cache inteligente pela combinação de axios + axios-cache-interceptor.

## Roadmap de atualizações
- Aumento do número de dispositivos responsivos;
- Adição dos idiomas Inglês e Espanhol;
- Aprimoramento da experiência de usuário (UX);
- Implementação de testes, com meta de 100% de cobertura;
- Desenvolvimento de API e banco de dados próprios em Java com Springboot.

## Tecnologias

![Skills](https://skills.syvixor.com/api/icons?i=vite,typescript,redux,reactjs,tailwindcss)

## Instalação

```bash
pnpm install
pnpm dev
```
