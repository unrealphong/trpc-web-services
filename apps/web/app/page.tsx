import { trpc } from "@web/app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({name: "Phong"});
  console.log(greeting);
  return <div>{greeting}</div>;
}
