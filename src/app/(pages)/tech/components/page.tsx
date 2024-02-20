import PostItem from "@/app/(pages)/tech/components/post-item";

export default function ComponentsPage() {
  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12">
        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          This is heading
        </span>
        <div className="flex flex-col gap-8">
          <PostItem />
        </div>
      </div>
    </section>
  );
}
