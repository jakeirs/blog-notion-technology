import Image from "next/image";

const src =
  "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D";
export default function ComponentsImagesPage() {
  return (
    <div>
      <section className="flex justify-center flex-col p-40">
        {/* ideal <Image fill /> component */}
        <div className="aspect-video relative max-w-[1000px] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D"
            fill
            sizes={"100vw"}
            alt="The founding team embracing in a photography studio."
            className="object-cover h-auto max-w-full"
          />
        </div>
        {/* ideal <Image fill /> component */}
        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <img className="aspect-square h-full w-full" src="/avatars/01.png" />
        </span>
      </section>
    </div>
  );
}
