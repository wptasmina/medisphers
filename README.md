This is a [Live Link](https://medisphers.vercel.app)<br> project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
1) git checkout development <br>
2) git pull <br>
3) git checkout Tasmina (নিজের ব্রাঞ্চের নাম)<br>
4) git merge development <br>
5) ( নিজের ব্রাঞ্চে আছেন কিনা চেক করোন। )<br>
<br/><br/>

-----**conflicts** Hole------

1) git checkout main (যে ব্রাঞ্চে করফিক্ট হয়েছে ব্রাঞ্চের নাম ) <br/>
2) git pull origin main <br/>

3) git checkout main (যে ব্রাঞ্চে করফিক্ট হয়েছে ব্রাঞ্চের নাম) <br/>
4) git merge development (যে ব্রাঞ্চের সাথে মার্জ করবেন) <br/>

5) git add . <br/>
6) git commit -m "Merged development into main" <br/>
7) git push origin main <br/>

-----------------------------------------------------------

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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
