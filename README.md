<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# 📷 Projeto: Feed de Postagens do Instagram

## 📚 Atividade

Implementação de uma **réplica simplificada do Feed do Instagram**, como parte de uma atividade prática de desenvolvimento front-end.

A aplicação foi construída utilizando **React**, **Next.js** e **Tailwind CSS**, seguindo o modelo de interface proposto.

---

## ✅ Funcionalidades principais

- 🧩 **Componente `PostItem`:** criado para representar cada postagem individualmente. Recebe como propriedade um objeto `post`, contendo:
  - `username`
  - `avatarUrl`
  - `imageUrl`
  - `numberOfLikes`
  - `description`
  - Outros campos relevantes para simular uma postagem real.

- 📦 **Array de postagens:** foi criado um array contendo **20 objetos de postagens** com dados simulados.

- 🔄 **Renderização dinâmica:** todas as postagens são exibidas dinamicamente com `.map()` a partir do array, utilizando o componente `PostItem`.

- 🎨 **Estilização moderna:** o visual da página foi desenvolvido com Tailwind CSS, garantindo responsividade e layout agradável.

- 🗃️ **Organização do projeto:** estrutura clara e modular, com separação entre dados, componentes e páginas:
  - `/data`: array de postagens.
  - `/components`: componente `PostItem`.
  - `/app`: página principal.

---

## ✨ Diferencial implementado

- 💖 **Botão de Like interativo:** cada postagem conta com um botão de curtida. Ao ser clicado:
  - O estado alterna entre "curtido" e "não curtido".
  - O ícone muda visualmente, simulando o comportamento real do Instagram.

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Feed-Instagram
Mini Feed de Postagem Instagram 
>>>>>>> d4819544354164febc030a728f841ecb00dd2f2b
