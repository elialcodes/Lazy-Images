This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started :book: :blush: :pencil: :star:

Simple lazy images exercise with Next.js, React.js and TypeScript that consists of making calls to an external api and loading random images of foxes.

With this exercise I learned how to use the hook useRef and the methods of the window object. The purpose of lazy images is that images are not rendered until they appear in the user's viewport, which improves page performance.

If we click the “Add fox” button several times and open the Console/Elements, we can see that in those images the “src” attribute will be an empty rectangle until they appear in the viewport, which will be when the “src” attribute changes to the url provided by the api.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More 📚

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel 💻 

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Links 🔗

https://lazy-images-sage.vercel.app/
](https://lazy-images-sage.vercel.app/)
