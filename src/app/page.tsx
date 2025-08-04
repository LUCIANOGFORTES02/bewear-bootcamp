import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <p className="my-1 bg-red-500 px-5 text-red-500">This is a paragraph</p>
      <Button>Click me</Button>
    </div>
  );
}
