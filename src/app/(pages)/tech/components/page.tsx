import PostItem from "@/app/(pages)/tech/components/post-item";

export const src =
  "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D";

export default function ComponentsPage() {
  return (
    <section className="flex justify-center">
      <div className="max-w-[1260px] w-full mx-6 my-12">
        <div className="text-5xl text-center py-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          This is heading
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <PostItem src={src} />
          <PostItem src={src} />
        </div>
      </div>
    </section>
  );
}
